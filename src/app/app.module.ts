import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteManualComponent } from './criando-componentes/componente-manual.component';
import { ComponenteComandoComponent } from './componente-comando/componente-comando.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteManualComponent,
    ComponenteComandoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
