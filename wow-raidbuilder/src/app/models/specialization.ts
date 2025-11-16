import { WeaponTypes } from "../enums/weapon-types";
import { Roles } from "../enums/roles";
import { Stats } from "../enums/stats";
import { ISpecializationData } from "../interfaces/ispecialization-data"

export class Specialization {
    public name: string;
    private class: string;
    public role: Roles;
    public mainStat: Stats;
    public weapons: Array<WeaponTypes>;
    constructor(specData: ISpecializationData) {
        this.name = specData.name;
        this.class = specData.class;
        this.role = specData.role as Roles;
        this.mainStat = specData.main_stat as Stats;
        this.weapons = new Array<WeaponTypes>();
        specData.weapons.forEach((weapon: string) => {
            this.weapons.push(weapon as WeaponTypes);
        })
    }

    public getClassName(): string {
        return this.class;
    }
}
