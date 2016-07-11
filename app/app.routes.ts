import { provideRouter, RouterConfig }  from '@angular/router';

import { PokemonListComponent } from './pokemon-list.component';

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/pokedex',
    pathMatch: 'full'
  },
  {
    path: 'pokedex',
    component: PokemonListComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
