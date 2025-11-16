import { Injectable, inject } from '@angular/core';
import classData from "../data/classes.json"
import { CharacterClass } from "../models/character-class"
import { ICharacterClassData } from "../interfaces/icharacter-class-data"
import { SpecializationsService } from "./specializations.service"

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  private classes: CharacterClass[];
  private specializationsService: SpecializationsService = inject(SpecializationsService);
  constructor() {
    this.classes = new Array<CharacterClass>(); 
    classData.forEach((classDataObject: ICharacterClassData) => {
      let className = classDataObject.name;
      let specializations = this.specializationsService.getSpecializationsByClassName(className);
      let classInstance = new CharacterClass(
        classDataObject,
        specializations
      );
      this.classes.push(classInstance)
    })
  }

  public getClasses(): CharacterClass[] {
    return this.classes;
  }
}
