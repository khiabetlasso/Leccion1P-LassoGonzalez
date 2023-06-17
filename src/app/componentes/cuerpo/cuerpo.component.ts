import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  exitApplication() {
    // Agrega aquí la lógica para cerrar o salir de la aplicación
    console.log('Exiting application...');
  }
}
