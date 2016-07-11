import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Pokemon } from './pokemon';
import { Stat } from './pokemon';

@Injectable()
export class PokemonService {
  private pokemonURL = 'https://pokeapi.co/api/v2';
  constructor(private http: Http) { }

  getAllPokemon(): Promise<Pokemon[]> {
    return this.http.get(`${this.pokemonURL}/pokemon?limit=721`)
      .toPromise()
      .then((response: any) => {
        let i = 0;
        return response.json().results.map((item: Pokemon) => {
          i++;
          return {
            id: i,
            name: this.capitalizeFirstLetter(item.name),
            sprite: `http://pokeapi.co/media/sprites/pokemon/${i}.png`
          };
        });
      })
      .catch(this.handleError);
  }

  getPokemon(id: number) {
    return this.http.get(`${this.pokemonURL}/pokemon/${id}`)
      .toPromise()
      .then(response => {
        let p = response.json();
        p.name = this.capitalizeFirstLetter(p.name);
        p.largeSprite = `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${('000'+p.id).slice(-3)}.png`;
        return p;
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
