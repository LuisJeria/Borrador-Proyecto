import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoFormComponent } from './components/ingreso-form/ingreso-form.component';
import { EgresoFormComponent } from './components/egreso-form/egreso-form.component';
import { CajaListComponent } from './components/caja-list/caja-list.component';
import { NavigatorComponent } from './components/navigator/navigator.component';

import {IngresosService} from './services/ingresos.service';
import {EgresosService} from './services/egresos.service';

@NgModule({
  declarations: [
    AppComponent,
    IngresoFormComponent,
    EgresoFormComponent,
    CajaListComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    IngresosService,
    EgresosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
