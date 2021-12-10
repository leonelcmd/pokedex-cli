import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HablidadeFormComponent } from './hablidade-form/hablidade-form.component';
import { GenericRouterComponent } from '../pokemon/pokemon-routing.module';
import { HabilidadeRoutingModule } from './habilidade-routing.module';
import { FormsModule } from '@angular/forms';
import { PokemonCadastrarComponent } from '../pokemon/page/pokemon-cadastrar/pokemon-cadastrar.component';

@NgModule({
  declarations: [
    GenericRouterComponent,
    HablidadeFormComponent,
    PokemonCadastrarComponent,
  ],
  imports: [
    CommonModule,
    HabilidadeRoutingModule,
    FormsModule,
  ] 
})

export class HabilidadeModule { }
