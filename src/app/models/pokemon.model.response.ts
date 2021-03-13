import { Pokemon } from "./pokemon.model";

export interface PokemonResonse {
    count: number;
    next: string;
    prev: string;
    results: Pokemon[];
}