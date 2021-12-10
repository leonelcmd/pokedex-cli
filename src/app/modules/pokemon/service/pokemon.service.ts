import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPokemon } from '../model/pokemon.model';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  constructor(private httpClient: HttpClient) { }
    salvarPokemon(pokemon: IPokemon): Promise<IPokemon> {
      return this.httpClient
      .post<IPokemon>('http://localhost:8080/pokemons/', pokemon).toPromise();
    }

    getAll(): Promise<PageConfig><IPokemon>> {
      return this.httpClient.get<IPokemon>(`http://localhost:8080/pokemon/${id}`).toPromise();
    }

}