import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericRouterComponent } from '../pokemon/pokemon-routing.module';



@NgModule({
  declarations: [
    GenericRouterComponent,
  ],
  imports: [
    CommonModule,
    HabilidadeRoutingModule,
    
  ]
})
export class HabilidadeRoutingModule { }
