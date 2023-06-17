import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { PieComponent } from './componentes/pie/pie.component';
import { Vista1Component } from './componentes/cuerpo/vista1/vista1.component';
import { Vista2Component } from './componentes/cuerpo/vista2/vista2.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatButtonToggleAppearance } from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatIconButton } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { Vista3Component } from './componentes/cuerpo/vista3/vista3.component';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    CuerpoComponent,
    PieComponent,
    Vista1Component,
    Vista2Component,
    Vista3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
MatProgressBarModule,
MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }