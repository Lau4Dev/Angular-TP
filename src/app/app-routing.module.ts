import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtListComponent } from './art-list/art-list.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    //Rutas de la pagina
  {
    path: 'articles', component : ArtListComponent
  },
  {
    path: 'cart', component : CartComponent
  },

  //redirige al inicio si no existe la ruta
  {
    path: '**',
    redirectTo: 'articles',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
