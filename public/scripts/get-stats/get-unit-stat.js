

import { units } from "../units.js"
import { getUnitAttackScore } from "./get-attack-score.js"
import { getDefenseScore } from "./get-defense-stat.js"
import { stats } from "../stats.js"

export function getUnitsStats(){
    
    for(let unit of Object.values(units) ) {
    
            stats[unit.id] = {}
            stats[unit.id].attackScore = getUnitAttackScore(unit)
    }
    
    for(let unit of Object.values(units) ) {
        stats[unit.id].defenseScore = getDefenseScore(unit)
    }
    
    for(let unit of Object.values(units) ) {
        console.log(`${unit.id}.strength : ${stats[unit.id].defenseScore.avgDefenseScore / stats[unit.id].attackScore.avgAttackScore}`)
    }
    
    console.log(stats['lightInfantry'])
    console.log(stats["gaurdInfantry"])
}