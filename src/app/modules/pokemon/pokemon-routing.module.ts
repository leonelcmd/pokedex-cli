import { createComponent } from '@angular/compiler/src/core';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCadastrarComponent } from './page/pokemon-cadastrar/pokemon-cadastrar.component';
import { PokemonListarComponent } from './page/pokemon-listar/pokemon-listar.component';

@Component({
  template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent {};
// variavel do tipo Route é uma interface do angular que se torna um objeto

const routes: Routes = [
  {
    path: 'pokemon',
// quando feito um get em pokemons, listar registros atuais
    children: [
      {path: 'pokemon', redirectTo: 'pokemon/lista', pathMatch: 'full'},
      {path: 'pokemon/cadastrar', component: PokemonCadastrarComponent},
      {path: 'pokemon/listar', component: PokemonListarComponent}
    ]
  }
];

@NgModule ({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
  
})
export class TipoRoutingModule{};