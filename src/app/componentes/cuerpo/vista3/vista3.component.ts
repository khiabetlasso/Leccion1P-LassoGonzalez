import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-vista3',
  templateUrl: './vista3.component.html',
  styleUrls: ['./vista3.component.css']
})
export class  Vista3Component {
  nombre = 'Khiabet Juliette';
  apellido = 'Lasso González';
  correo = 'khiabet.lassog@ug.edu.ec';
  redirigirATwitter() {
    window.location.href = 'https://twitter.com';
  }
  redirigirAfcr() {
    window.location.href = 'https://facebook.com';
  }
  }
