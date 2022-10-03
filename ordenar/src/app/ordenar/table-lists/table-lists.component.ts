import { Component, OnInit } from '@angular/core';
import { Alumnos } from 'src/app/table-lists/table-lists.module';

const ELEMENT_DATA: Alumnos[] = [
  { id: 1, nombre: 'David', apellidos: 'Bustamante', edad: 20, sexo: true },
  { id: 2, nombre: 'Maylor', apellidos: 'Mercado', edad: 20, sexo: true },
  { id: 3, nombre: 'Raúl', apellidos: 'Caballero', edad: 17, sexo: true },
  { id: 4, nombre: 'Ana', apellidos: 'Del Rosario', edad: 18, sexo: false },
  { id: 5, nombre: 'Meyling', apellidos: 'Maradiaga', edad: 15, sexo: false },
  { id: 6, nombre: 'Georgina', apellidos: 'López', edad: 25, sexo: false },
  { id: 7, nombre: 'Andrea', apellidos: 'Roldan', edad: 20, sexo: false },
  { id: 8, nombre: 'Nazaret', apellidos: 'Ruiz', edad: 35, sexo: false },
  { id: 9, nombre: 'Olga', apellidos: 'Palomares', edad: 26, sexo: false },
  { id: 10, nombre: 'Miguel', apellidos: 'Campos', edad: 19, sexo: true },
];

@Component({
  selector: 'app-table-lists',
  templateUrl: './table-lists.component.html',
  styleUrls: ['./table-lists.component.css'],
})
export class TableListsComponent implements OnInit {
  constructor() {}
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {}
}
