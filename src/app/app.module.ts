import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContadorComponent } from './contador/contador.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { BotonesComponent } from './botones/botones.component';
import { ClasesComponent } from './clases/clases.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { FormularioplantillaComponent } from './formularioplantilla/formularioplantilla.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    EjemploComponent,
    BotonesComponent,
    ClasesComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    FormularioplantillaComponent,
    FormularioReactivoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
