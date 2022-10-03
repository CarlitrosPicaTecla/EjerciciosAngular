import { Component, OnInit } from '@angular/core';

interface Profesores {
  id : number;
  nombre: string;
  apellidos: string;
  sexo : boolean;
  edad: number;
}

@Component({
  selector: 'app-lista-for',
  templateUrl: './lista-for.component.html',
  styleUrls: ['./lista-for.component.css'],
})
export class ListaForComponent implements OnInit {
  constructor() {}

  profesores: Profesores[] = [
    { id : 1, nombre: 'Miguel Ángel', apellidos: 'Campos', sexo : true, edad : 18 },
    { id : 2, nombre: 'Maria', apellidos: 'Becerra', sexo : false , edad : 17},
    { id : 3, nombre: 'Carlos', apellidos: 'Maricona', sexo : true, edad : 25 }
  ];

  

  
  ngOnInit(): void {}
}
