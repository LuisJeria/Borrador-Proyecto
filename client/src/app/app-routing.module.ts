import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CajaListComponent } from './components/caja-list/caja-list.component';
import {IngresoFormComponent} from './components/ingreso-form/ingreso-form.component';
import { EgresoFormComponent } from './components/egreso-form/egreso-form.component';
import { MesasViewComponent } from './mesas-view/mesas-view.component';
import { PedidosListComponent } from './pedidos-list/pedidos-list.component';

const routes: Routes = [
  {
    path:'caja',
    component:CajaListComponent
  },
  {
    path:'caja/ingreso',
    component : IngresoFormComponent
  },
  {
    path:'caja/egreso',
    component : EgresoFormComponent
  },
  {
    path:'caja/ingreso/:id',
    component : IngresoFormComponent
  },
  {
    path:'caja/egreso/:id',
    component : EgresoFormComponent
  },
  {
    path:'mesas',
    component : MesasViewComponent
  },
  {
    path:'mesas/pedidos',
    component : PedidosListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
