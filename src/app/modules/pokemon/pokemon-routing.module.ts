import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoListaComponent } from '../tipo-lista/tipo-lista.component';


@Component({
  template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent {}
// variavel do tipo Routes é uma interface do angular que se torna um objeto
const routes: Routes = [
  {

    path: 'pokemon',
// quando feito um get em pokemons, listar registros atuais
    children: [
      {path: 'pokemon', redirectTo: 'pokemon/lista', pathMatch: 'full'},
      {path: 'pokemon/lista', component: TipoListaComponent},
      {},
    ]
  }
];

@NgModule ({
  imports: [
    RouterModule.forChild(routes), //it can be 'routes', i dont know, idfc...

  ],
  exports: [RouterModule]
})
export class TipoRoutingModule{};