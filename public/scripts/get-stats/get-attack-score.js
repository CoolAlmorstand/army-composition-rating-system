



import { units } from "../units.js"
import { stats } from "../stats.js"
import { terrains } from "../config.js"


function getRangeAttackScore(unit, terrain, target) {
    
    if(!unit.attackTypes.includes("range") ){ return 0 }
    
    let avgRangeAttack = 0
    
    for(let range in unit.ranges){
        
        const weapon = unit.rangeWeapons[range]
        
        const rangeProportion = unit.ranges[range] / unit.totalRange
        const rangeDamageModifier =  1 + ( unit.rangeDamageModifier[range] / 2 )
        
        const terrainDamageRes = target.terrainModifiers?.[terrain]?.[weapon.id] || 1
        const weaponDmgRes = ( target.category[`${weapon.id}DamageResistance`] || 1 )
            
        const healthDamage = unit.rangeAttack * rangeDamageModifier * terrainDamageRes * weaponDmgRes
        
        const shellDamageResistance = 1 - ( weapon.type == "shell" ? target.avgShellDmgReduction : 0 )
        const shellAreaOfAffectBonus = weapon.shellAreaOfAffectBonus || 1
        
        const orgDamage = (healthDamage / target.maxHp) * 10 * weapon.orgDamageRatio * shellDamageResistance * shellAreaOfAffectBonus
        
        avgRangeAttack += orgDamage * rangeProportion

        
    }
    
    return target.organization / avgRangeAttack
}


function getMeleeAttackScore(unit, terrain, target){

    if(!unit.attackTypes.includes("melee") ){ return 0 }

    const weapon = unit.meleeWeapon
    const weaponDmgRes = target.category[`${weapon.id}DamageResistance`] || 1

    const terrainDamageRes = target.terrainModifiers?.[terrain]?.meleeDefense || 1
    const meleeAttack = unit.meleeAttack * weaponDmgRes
    const healthDamage = meleeAttack * ( meleeAttack / ( meleeAttack + ( target.meleeDefense * terrainDamageRes ) ) )
    const orgDamage = ( healthDamage / target.maxHp ) * 10 * weapon.orgDamageRatio
            
    return target.organization / orgDamage
}

function getChargeAttackScore(unit, terrain, target) {
    
    if(!unit.attackTypes.includes("charge") ){ return 0 }

    const terrainDamageRes = (2 - target.terrainModifiers?.[terrain]?.meleeDefense ) || 1

    const avgChargeResistance = target.avgChargeResistance / 100
    
    const healthDamage = ( unit.chargeBonus * (1 - (avgChargeResistance - unit.chargePenetration ) ) ) * terrainDamageRes
    
    const orgDamage = ( healthDamage / unit.maxHp ) * 10 * unit.meleeWeapon.orgDamageRatio
    
    return target.organization / orgDamage 
}


export function getUnitAttackScore(unit) {
    
    const attackScore = {}
    attackScore.avgAttackScore = 0
    for(let terrain of terrains){
    
        attackScore[terrain] = {}
        attackScore[terrain].avgAttackScore = 0
        for(let target of Object.values(units) ) {
           
            attackScore[terrain][target.id] = {}
           
            const meleeScore = getMeleeAttackScore(unit, terrain, target)
            const chargeScore = getChargeAttackScore(unit, terrain, target)
            const rangeScore = getRangeAttackScore(unit, terrain, target) 
            
            attackScore[terrain][target.id].melee = meleeScore
            attackScore[terrain][target.id].charge = chargeScore
            attackScore[terrain][target.id].range =  rangeScore
            
            const adjustedMeleeScore = meleeScore > 0 ? 1 / meleeScore : 0
            const adjustedChargeScore = chargeScore > 0 ? 1 / chargeScore : 0
            const adjustedRangeScore = rangeScore > 0 ? 1 / rangeScore : 0

            const weightedScore = 1 / (
                (
                    (adjustedMeleeScore * adjustedMeleeScore) + 
                    (adjustedChargeScore * adjustedChargeScore) +
                    (adjustedRangeScore * adjustedRangeScore )
                ) /
                (adjustedMeleeScore + adjustedChargeScore + adjustedRangeScore)
            )
            
            attackScore[terrain][target.id].avgWeightedScore = weightedScore
            attackScore[terrain].avgAttackScore += weightedScore / Object.values(units).length
        }
        
        attackScore.avgAttackScore += attackScore[terrain].avgAttackScore / terrains.length 
    }
    
    return attackScore
}