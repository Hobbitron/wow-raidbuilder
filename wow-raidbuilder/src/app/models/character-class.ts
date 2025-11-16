import { ArmorTypes } from '../enums/armor-types'
import { Specialization } from '../models/specialization'
import { ICharacterClassData } from '../interfaces/icharacter-class-data'

export class CharacterClass {
    public name: string;
    public armorType: ArmorTypes;
    public hasteBuff: boolean;
    public battleRes: boolean;
    
    public specializations: Specialization[];

    constructor(classDataObject: ICharacterClassData, specializations: Specialization[]) {
        this.name = classDataObject.name;
        this.armorType = classDataObject.armor as ArmorTypes;
        this.hasteBuff = classDataObject.haste_buff;
        this.battleRes = classDataObject.battle_res;
        this.specializations = specializations;
    }
}
