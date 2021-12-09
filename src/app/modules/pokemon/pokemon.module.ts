import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericRouterComponent } from './pokemon-routing.module';


@NgModule({
  declarations: [
    GenericRouterComponent,
  ],
  imports: [
    CommonModule,
    PokemonModule
  ]

})
export class PokemonModule { }
