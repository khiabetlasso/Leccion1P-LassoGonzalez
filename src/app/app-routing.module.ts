import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { Vista1Component } from './componentes/cuerpo/vista1/vista1.component';
import { Vista2Component } from './componentes/cuerpo/vista2/vista2.component';
import { Vista3Component } from './componentes/cuerpo/vista3/vista3.component';

import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PieComponent } from './componentes/pie/pie.component';

const routes: Routes = [
  {path: '', redirectTo:'cuerpo', pathMatch: 'full'},
  {path:'encabezado', component: EncabezadoComponent},
  {path:'cuerpo', component: CuerpoComponent},
  {path:'pie', component: PieComponent},
  {path:'vista1', component: Vista1Component},
  {path:'vista2', component: Vista2Component},
  {path:'vista3', component: Vista3Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
