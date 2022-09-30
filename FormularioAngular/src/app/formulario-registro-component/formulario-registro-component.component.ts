import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-registro-component',
  templateUrl: './formulario-registro-component.component.html',
  styleUrls: ['./formulario-registro-component.component.css'],
})
export class FormularioRegistroComponentComponent implements OnInit {
  constructor() {}
  inputName = '';
  inputApellidos = '';
  inputNif = '';
  inputTelefono = '';
  sexo = '';
  selected = '';
  inputEmail = '';
  disabled = false;

  enviarDatos() {
    console.log(this.inputName),
      console.log(this.inputApellidos),
      console.log(this.inputNif),
      console.log(this.inputTelefono),
      console.log(this.sexo),
      console.log(this.inputEmail),
      console.log(this.selected);
  }

  ngOnInit(): void {}
}
