import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit{

  constructor(public pokemonService: PokemonService) {}

  ngOnInit() {
    
  }
}
