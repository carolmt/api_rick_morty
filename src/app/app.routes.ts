import { Routes } from '@angular/router';
import { PersonajesComponent } from './Components/personajes/personajes.component';
import { LocationComponent } from './Components/location/location.component';

export const routes: Routes = [
    {path: 'personajes', component: PersonajesComponent},
    {path: 'locations', component: LocationComponent}
];
