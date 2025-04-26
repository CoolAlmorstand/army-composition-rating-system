import { units } from "../units.js"
import { stats } from "../stats.js"
import { terrains } from "../config.js"


export function getDefenseScore(unit){
    
    const defenseScore = {}
    defenseScore.avgDefenseScore = 0
    for(let terrain of terrains) {
        defenseScore[terrain] = {}
        defenseScore[terrain].avgDefenseScore = 0
        for(let attacker of Object.values(units) ) {
            defenseScore[terrain][attacker.id] = {}
            
            
            const meleeScore = stats[attacker.id].attackScore[terrain][unit.id].melee
            const chargeScore = stats[attacker.id].attackScore[terrain][unit.id].charge
            const rangeScore = stats[attacker.id].attackScore[terrain][unit.id].range

            defenseScore[terrain][attacker.id].melee = meleeScore
            defenseScore[terrain][attacker.id].charge = chargeScore
            defenseScore[terrain][attacker.id].range = rangeScore

            defenseScore[terrain][attacker.id].avgDefenseScore = ( meleeScore + chargeScore + rangeScore ) / attacker.attackTypes.length
            defenseScore[terrain].avgDefenseScore += defenseScore[terrain][attacker.id].avgDefenseScore / Object.values(units).length
        }
        
        defenseScore.avgDefenseScore += defenseScore[terrain].avgDefenseScore / terrains.length
    }
    
    return defenseScore
}