import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes';

@Component({
  selector: 'app-root',
  standalone: true,   
  imports: [RouterOutlet, HeroesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Lab 07 Angular App');
}
