import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrls: ['./catalogue-page.component.css']
})
export class CataloguePageComponent implements OnInit {



  constructor(private readonly pokemonService: PokemonService) {

  }

  get pokemon(): Pokemon[] {
    return this.pokemonService.pokemon
  }

  ngOnInit(): void {
    this.pokemonService.fetchPokemon()
  }

}
