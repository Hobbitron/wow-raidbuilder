import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddPlayerComponent } from "./add-player/add-player.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddPlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'wow-raidbuilder';
}
