import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { IngresoFormComponent } from './components/ingreso-form/ingreso-form.component';
import { EgresoFormComponent } from './components/egreso-form/egreso-form.component';
import { CajaListComponent } from './components/caja-list/caja-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IngresoFormComponent,
    EgresoFormComponent,
    CajaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
