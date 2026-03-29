import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HEROES } from '../mock-heroes';
import { RemoveSpacesPipe } from '../remove-spaces-pipe';
import { InputFormatDirective } from '../input-format';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor, RemoveSpacesPipe, InputFormatDirective],
  templateUrl: './heroes.html'
})
export class HeroesComponent {
  heroes = HEROES;
}