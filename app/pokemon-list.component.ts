import { Component, OnInit }      from '@angular/core';
import { Router }                 from '@angular/router';

import { Pokemon }                from './pokemon';
import { PokemonService }         from './pokemon.service';
import { PokemonDetailComponent } from './pokemon-detail.component';

@Component({
  selector: 'pokemon-list',
  templateUrl: 'app/pokemon-list.component.html',
  directives: [PokemonDetailComponent]
})
export class PokemonListComponent implements OnInit {

  pokemon: Pokemon[] = [];
  selectedPokemon: any;
  error: any;

  constructor(
    private router: Router,
    private pokemonService: PokemonService) {
  }

  getAllPokemon() {
    this.pokemonService
      .getAllPokemon()
      .then(pokemon => this.pokemon = pokemon)
      .catch(error => this.error = error);
  }

  showdetails(id: number) {
    this.pokemonService.getPokemon(id)
      .then(p => this.selectedPokemon = p)
      .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getAllPokemon();
  }

}
