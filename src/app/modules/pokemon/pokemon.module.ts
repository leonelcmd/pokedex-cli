import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericRouterComponent } from './pokemon-routing.module';
import { PokemonCadastrarComponent } from './page/pokemon-cadastrar/pokemon-cadastrar.component';
import { PokemonListarComponent } from './page/pokemon-listar/pokemon-listar.component';


@NgModule({
  declarations: [
    GenericRouterComponent,
    PokemonCadastrarComponent,
    PokemonListarComponent,
  ],
  imports: [
    CommonModule,
    PokemonModule
  ]

})
export class PokemonModule { }
