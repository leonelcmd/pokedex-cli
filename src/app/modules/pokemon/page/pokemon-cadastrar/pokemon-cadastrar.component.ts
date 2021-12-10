
import { Component, OnInit } from '@angular/core';
import { IHabilidade } from 'src/app/modules/habilidade/model/habilidade.model';
import { HabilidadeService } from 'src/app/modules/habilidade/service/habilidade.service';
import { IPokemon } from '../../model/pokemon.model';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemon-cadastrar',
  templateUrl: './pokemon-cadastrar.component.html',
  styleUrls: ['./pokemon-cadastrar.component.css']
})
export class PokemonCadastrarComponent implements OnInit {

  habilidade: IHabilidade[] = [];
  pokemon = {} as IPokemon;


  constructor(private habilidadeService: HabilidadeService, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    // não sei o que colocar aqui
  }

  salvarPokemon() {
    this.pokemonService.salvarPokemon(this.pokemon)
    .then(result => {
      console.log(result);
    })
  }

}
