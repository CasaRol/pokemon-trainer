import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';
import { PokemonResponse } from '../models/pokemon.model.response';

const pokeAPI: string = 'https://pokeapi.co/api/v2/pokemon?limit=151'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly pokemonCache$
  public pokemon: Pokemon[] = []
  public error: string = ""


  constructor(private readonly http: HttpClient) {
    this.pokemonCache$ = this.http.get<PokemonResponse>(pokeAPI)
      .pipe(shareReplay(1))
  }

  fetchPokemon(): void {
    this.pokemonCache$
      .pipe(
        map((response: PokemonResponse) => {
          return response.results.map((pokemon: Pokemon) => ({
            ...pokemon,
            ...this.getIdAndImage(pokemon.url)
          }))
        })
      ).subscribe(
        (pokemon: Pokemon[]) => {
          this.pokemon = pokemon
        },
        (error: HttpErrorResponse) => {
          this.error = error.message
        }
      )
  }

  private getIdAndImage(url: string): any {
    const id = url.split('/').filter(Boolean).pop()
    return {
      id: Number(id),
      pokeImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    }
  }
}