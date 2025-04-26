

import { weapons } from "./weapons.js"
import { categories } from "./category.js"

const lineInfantry = {
    id: "lineInfantry",
    category: categories.infantry,

    maxHp: 800,
    organization: 150,
    meleeDefense: 28,
    maxChargeResistance: 100,
    
    attackTypes: ["range", "melee", "charge"],
    
    meleeAttack: 37,
    meleeWeapon: weapons.melee.bayonet,
    chargeBonus: 22,
    chargePenetration: 0.1,
    
    rangeAttack: 24,
    totalRange: 140,
    ranges: { close: 20, mid: 40, long: 80 },
    rangeDamageModifier: { close: 0.5, mid: 0, long: -0.5 },
    rangeWeapons: {
        close: weapons.range.musket,
        mid: weapons.range.musket,
        long: weapons.range.musket
    },

    movement: 25,
    orgRadius: 48,
    orgRadiusBonus: 1.6,

    terrainModifiers: {
        forest: {
            //0.5
            meleeDefense: 1 + 0.5,
            movement: 1 + -0.2,
            //projectile absorption 
            musket: 1 -0.2,
            lightMusket: 1 - 0.16,
            cannonBall: 1 - 0.18,
            heavyCannonBall: 1 - 0.15,
            lightCannonBall: 1 - 0.2,
            explosiveShell: 1 - 0.02,
            cannisterFire: 1 - 0.2,
            heavyCanisterFire: 1 - 0.2,
            lightCanisterFire: 1 - 0.2,
            howitzerCanister: 1 - 0.2
        },
        
        village: {
            meleeDefense: 1 + 0.8,
            movement: 1 + -0.2,
            // projectile absorption 
            musket: 1 - 0.6,
            lightMusket: 1 - 0.55,
            cannonBall: 1 - 0.5,
            heavyCannonBall: 1 - 0.45,
            lightCannonBall: 1 - 0.6,
            explosiveShell: 1 - 0.04,
            cannisterFire: 1 - 0.6,
            heavyCanisterFire: 1 - 0.6,
            lightCanisterFire: 1 - 0.6,
            howitzerCanister: 1 - 0.6
        }
    }
}

const lightInfantry = {
    id: "lightInfantry",
    category: categories.infantry,

    maxHp: 800,
    organization: 165,
    meleeDefense: 28,
    maxChargeResistance: 100,

    attackTypes: ["range", "melee", "charge"],

    meleeAttack: 37,
    meleeWeapon: weapons.melee.bayonet,
    chargeBonus: 22,
    chargePenetration: 0.1,

    rangeAttack: 30,
    totalRange: 145,
    ranges: { close: 20, mid: 45, long: 80 },
    rangeDamageModifier: { close: 0.6, mid: 0, long: -0.4 },
    rangeWeapons: {
        close: weapons.range.musket,
        mid: weapons.range.musket,
        long: weapons.range.musket
    },

    movement: 90,
    orgRadius: 48,
    orgRadiusBonus: 1.6,

    terrainModifiers: {
        forest: {
            meleeDefense: 1 + 0.6,
            movement: 1 + -0.15,
            musket: 1 - 0.2,
            lightMusket: 1 - 0.16,
            cannonBall: 1 - 0.18,
            heavyCannonBall: 1 - 0.15,
            lightCannonBall: 1 - 0.2,
            explosiveShell: 1 - 0.02,
            cannisterFire: 1 - 0.2,
            heavyCanisterFire: 1 - 0.2,
            lightCanisterFire: 1 - 0.2,
            howitzerCanister: 1 - 0.2
        },

        village: {
            meleeDefense: 1 + 0.9,
            movement: 1 + -0.15,
            musket: 1 - 0.6,
            lightMusket: 1 - 0.55,
            cannonBall: 1 - 0.5,
            heavyCannonBall: 1 - 0.45,
            lightCannonBall: 1 - 0.6,
            explosiveShell: 1 - 0.04,
            cannisterFire: 1 - 0.6,
            heavyCanisterFire: 1 - 0.6,
            lightCanisterFire: 1 - 0.6,
            howitzerCanister: 1 - 0.6
        }
    }
};

const gaurdInfantry = {
    id: "gaurdInfantry",
    category: categories.infantry,

    maxHp: 800,
    organization: 180,
    meleeDefense: 30,
    maxChargeResistance: 100,

    attackTypes: ["range", "melee", "charge"],

    meleeAttack: 41,
    meleeWeapon: weapons.melee.bayonet,
    chargeBonus: 25,
    chargePenetration: 0.5,

    rangeAttack: 26,
    totalRange: 145,
    ranges: { close: 20, mid: 45, long: 80 },
    rangeDamageModifier: { close: 0.6, mid: 0, long: -0.4 },
    rangeWeapons: {
        close: weapons.range.musket,
        mid: weapons.range.musket,
        long: weapons.range.musket
    },

    movement: 25,
    orgRadius: 72,
    orgRadiusBonus: 3,

    terrainModifiers: {
        forest: {
            meleeDefense: 1 + 0.5,
            movement: 1 + -0.2,
            musket: 1 - 0.2,
            lightMusket: 1 - 0.16,
            cannonBall: 1 - 0.18,
            heavyCannonBall: 1 - 0.15,
            lightCannonBall: 1 - 0.2,
            explosiveShell: 1 - 0.02,
            cannisterFire: 1 - 0.2,
            heavyCanisterFire: 1 - 0.2,
            lightCanisterFire: 1 - 0.2,
            howitzerCanister: 1 - 0.2
        },

        village: {
            meleeDefense: 1 + 0.8,
            movement: 1 + -0.2,
            musket: 1 - 0.6,
            lightMusket: 1 - 0.55,
            cannonBall: 1 - 0.5,
            heavyCannonBall: 1 - 0.45,
            lightCannonBall: 1 - 0.6,
            explosiveShell: 1 - 0.04,
            cannisterFire: 1 - 0.6,
            heavyCanisterFire: 1 - 0.6,
            lightCanisterFire: 1 - 0.6,
            howitzerCanister: 1 - 0.6
        }
    }
};

const dragoon = {
    id: "dragoon",
    category: categories.cavalry,

    maxHp: 800,
    organization: 160,
    meleeDefense: 25,
    maxChargeResistance: 100,

    attackTypes: ["melee", "charge"],

    meleeAttack: 39,
    meleeWeapon: weapons.melee.dragoonSword,
    chargeBonus: 50,
    chargePenetration: 0.05,

    rangeAttack: 26,
    totalRange: 145,

    movement: 145,
    orgRadius: 75,
    orgRadiusBonus: 1.5
};

const twelvePoundFootArtillery = {
    id: "twelvePoundFootArtillery",
    category: categories.artillery,

    maxHp: 600,
    organization: 150,
    meleeDefense: 8,
    maxChargeResistance: 50,

    attackTypes: ["range", "melee", "charge"],

    meleeAttack: 6,
    meleeWeapon: weapons.melee.artillerySabre,
    chargeBonus: 5,
    chargePenetration: 0,

    rangeAttack: 36,
    totalRange: 895,
    ranges: { close: 145, mid: 250, long: 500 },
    rangeDamageModifier: { close: 1, mid: 0, long: -0.75 },
    rangeWeapons: {
        close: weapons.range.canisterFire,
        mid: weapons.shell.cannonBall,
        long: weapons.shell.cannonBall
    },

    movement: 75,
    limberMovement: 25,
    chargeResistance: -0.5,
    orgRadius: 32,
    orgRadiusBonus: 0.6
}

export const units = {
    //lineInfantry, 
    lightInfantry, 
    gaurdInfantry
    //dragoon, 
    //twelvePoundFootArtillery
}