import { Component, Input }      from '@angular/core';

import { Pokemon }        from './pokemon';

@Component({
  selector: 'pokemon-detail',
  templateUrl: 'app/pokemon-detail.component.html',
  styleUrls: ['app/pokemon-detail.component.css']
})
export class PokemonDetailComponent {
  @Input()
  pokemon: Pokemon;

}
