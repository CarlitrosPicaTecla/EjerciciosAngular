import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  nombre: string;
  apellidos: string;
  fechaDeNacimiento: string;
  matricula: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    nombre: 'Maylor',
    apellidos: 'Bustamante',
    fechaDeNacimiento: '17/12/2001',
    matricula: '2DAM',
  },
  {
    id: 2,
    nombre: 'Carlos',
    apellidos: 'Ortega',
    fechaDeNacimiento: '17/07/2001',
    matricula: '2DAM',
  },
  {
    id: 3,
    nombre: 'David',
    apellidos: 'Mercado',
    fechaDeNacimiento: '27/12/2001',
    matricula: '2DAM',
  },
  {
    id: 4,
    nombre: 'Jose Luis',
    apellidos: 'Manzano',
    fechaDeNacimiento: '15/02/2002',
    matricula: '2DAM',
  },
  {
    id: 5,
    nombre: 'Víctor',
    apellidos: 'Ortega',
    fechaDeNacimiento: '17/12/2001',
    matricula: '2DAM',
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = [
    'id',
    'nombre',
    'apellidos',
    'fechaDeNacimiento',
    'matricula',
    'borrar',
    'editar',
  ];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  borrarFila(id: number) {
    if (confirm('¿Estas seguro?')) {
      this.dataSource.splice(id, 1);
      this.table.renderRows();
    }
  }

  editarFila(id: number) {
    if (confirm('Operación aún no disponible')) {
      //de momento no hace nada el metodo
    }
  }

  ngOnInit(): void {}
}
