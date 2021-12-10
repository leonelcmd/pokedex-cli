import { Component, OnInit } from '@angular/core';
import { IPageConfig } from 'src/app/commons/models/pagination.model';
import { RouteService } from 'src/app/commons/sevices/route.service';
import { IPokemon } from '../../model/pokemon.model';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrls: ['./pokemon-listar.component.css']
})
export class PokemonListarComponent implements OnInit {

  pokemons = [] as IPokemon[];

  constructor(private pokemonService: PokemonService, private routeService: RouteService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.pokemonService.getAll().then(result => {
      this.pokemons.concat(result);
    })
  }

}
