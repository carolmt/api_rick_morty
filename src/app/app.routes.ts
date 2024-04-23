import { Routes } from '@angular/router';
import { PersonajesComponent } from './Components/personajes/personajes.component';
import { LocationComponent } from './Components/location/location.component';
import { EpisodeComponent } from './Components/episode/episode.component';
import { InfoPersonajeComponent } from './Components/info-personaje/info-personaje.component';

export const routes: Routes = [
    {path: 'personajes', component: PersonajesComponent},
    {path: 'locations', component: LocationComponent},
    {path: 'episodes', component: EpisodeComponent},
    {path: 'info-personaje', component: InfoPersonajeComponent}
];
