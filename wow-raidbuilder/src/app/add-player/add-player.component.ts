import { Component, inject } from '@angular/core';
import { ClassesService } from '../services/classes.service'

@Component({
  selector: 'app-add-player',
  standalone: true,
  imports: [],
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.css'
})
export class AddPlayerComponent {
  private classesService = inject(ClassesService);
  constructor() {
    console.log(this.classesService.getClasses());
  }
  
}
