import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../interfaces/pokemon-response.interface';

const API_BASE_URL = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  public pokemonList(): Observable<PokemonResponse>{
    //es para indicarlo que apibaseurl es una variable le he quitado la barra al url del final para hacer esto
    //se puede directamente concatenar API_BASE_URL + 'pokemon'
    return this.http.get<PokemonResponse>(`${API_BASE_URL}/pokemon`);
  }

  
  public getPokemon(id: string) {
    return this.http.get(`${API_BASE_URL}/pokemon/${id}`);
  }
}
