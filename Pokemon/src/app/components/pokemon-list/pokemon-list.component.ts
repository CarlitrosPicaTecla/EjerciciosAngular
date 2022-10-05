import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon-response.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  //no puedo poner esto porque devuelve un observable
  listadoPokemon: Pokemon[] = [];
  //creo una lista de pokemon donde guardo el resultado de la lista de pokemon, cuando invoque a este componente me muestre la lista de componente
  mostrarPokemons() {
    //el punto subscribe lo que hace es una funcion anonima que es invocada cuando llega la respuesta del servidor, parametor, flecha, cuerpo de la funsión
    //respuesta es donde se guardara el pokmeonResponsive
    this.pokemonService.pokemonList().subscribe((respuesta) => {
      this.listadoPokemon = respuesta.results;
    });
  }

  ngOnInit() {
    this.pokemonService.pokemonList().subscribe((respuesta) => {
      this.listadoPokemon = respuesta.results;
    });
  }
}
