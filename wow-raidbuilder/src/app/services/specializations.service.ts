import { Injectable } from '@angular/core';
import { Specialization } from '../models/specialization'
import specializationsData from '../data/specializations.json'
import { ISpecializationData } from '../interfaces/ispecialization-data'

@Injectable({
  providedIn: 'root'
})
export class SpecializationsService {
  private specializations: Specialization[];
  constructor() {
    this.specializations = new Array<Specialization>();
    specializationsData.forEach((specData: ISpecializationData) => {
      this.specializations.push(new Specialization(specData));
    })
  }
  public getSpecializations() {

  }

  getSpecializationsByClassName(className: string): Specialization[] {
    return this.specializations.filter(spec => spec.getClassName() === className);
  }
}
