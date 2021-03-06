import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericRouterComponent } from '../pokemon/pokemon-routing.module';
import { HabilidadeRoutingModule } from './habilidade-routing.module';
import { FormsModule } from '@angular/forms';
import { PokemonCadastrarComponent } from '../pokemon/page/pokemon-cadastrar/pokemon-cadastrar.component';

@NgModule({
  declarations: [
    GenericRouterComponent,
    PokemonCadastrarComponent,
  ],
  imports: [
    CommonModule,
    HabilidadeRoutingModule,
    FormsModule,
  ] 
})

export class HabilidadeModule { }
