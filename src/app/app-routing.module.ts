import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pokemon',
    pathMatch: 'full'
  },
  {
    path: 'pokemon',
    data: {
      title: 'Get pokemon list'
    }
  },
  {
    path: 'cadastrar'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
