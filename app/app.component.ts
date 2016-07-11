import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { PokemonService } from './pokemon.service';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <nav class="navbar navbar-default">
        <ul class="nav navbar-nav">
          <a [routerLink]="['/pokedex']" routerLinkActive="active">Pokedex</a>
        </ul>
      </nav>
      <div class="jumbotron">
        <h1>{{title}}</h1>
      </div>
      <router-outlet></router-outlet>
    </div>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    PokemonService
  ]
})
export class AppComponent {
  title = 'Pokedex Playground';
}
