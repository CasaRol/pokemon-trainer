export interface Pokemon {
    id?: number;
    name: string;
    url: string;
    imageUrl?: string;
    types?: PokemonTypes[];
    stats?: PokemonStats[];
    height?: string;
    weight?: string;
    abilities?: pokemonAbilities[];
    base_experience?: string;
    moves?: PokemonMoves[];
}

export interface PokemonTypes {
    name: string;
}

export interface PokemonStats {
    base_stat: number;
    stat: PokemonStatName;
}

export interface PokemonStatName {
    name: string;
}

export interface PokemonTypes {
    type: PokemonTypeName;
}

export interface PokemonTypeName {
    name: string;
}

export interface pokemonAbilities {
    ability: PokemonAbilityName;
}

export interface PokemonAbilityName {
    name: string;
}

export interface PokemonMoves {
    move: PokemonMoveName;
}

export interface PokemonMoveName {
    name: string;
}