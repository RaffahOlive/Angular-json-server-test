import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MockFormComponent } from './mock-form/mock-form.component';
import { MockComponent } from './mock/mock.component';
import { PokemonsComponent } from './pokemons/pokemons.component';


const routes: Routes = [
  { path: 'pokemon', component: PokemonsComponent },
  { path: 'mock', component: MockComponent },
  { path: 'mock-form', component: MockFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
