import { Component,ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

export interface Persona {
  id?: number,
  ci?: string,
  firstname?: string,
  lastname?: string,
  birthday?: Date,
}
@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.component.html',
  styleUrls: ['./vista2.component.css']
})
export class Vista2Component {

  form: FormGroup;
  listPersona: any[] = [];
  listEliminados: any[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      ci: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthday: ['', Validators.required]
    });
  }

  agregarPersona() {
    if (this.form.valid) {
      const persona = this.form.value;
      this.listPersona.push(persona);
      this.form.reset();
    }
  }

  eliminarEstudiante(index: number, persona: any) {
    this.listPersona.splice(index, 1);
    this.listEliminados.push(persona);
  }

}
  