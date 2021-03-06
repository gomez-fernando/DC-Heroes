import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/:id', component: HeroComponent },
  { path: 'buscar/:search', component: BuscadorComponent },
  { path: '**', component: NotFoundComponent },
  // { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
