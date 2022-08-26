import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [];

  constructor(private http: HttpClient) {
    this.carregarPokemons();
   }

  async carregarPokemons() {
    const req = await this.http.get<any>('https://pokeapi.co/api/v2/pokemon').toPromise();
    this.pokemons = req.results;
    console.log(req)
  }
   
}
