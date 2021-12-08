import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent {}
// variavel do tipo Routes é uma interface do angular que se torna um objeto
const routs: Routes = [
  {

    path: 'pokemon',

    children: [
      {path: 'pokemon', redirectTo: 'pokemon/lista', pathMatch: 'full'},
      {path: 'habilidades'}
    ]
  }

]