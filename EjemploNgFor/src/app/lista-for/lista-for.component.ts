import { Component, OnInit } from '@angular/core';

interface Profesores {
  nombre: string;
}

@Component({
  selector: 'app-lista-for',
  templateUrl: './lista-for.component.html',
  styleUrls: ['./lista-for.component.css'],
})
export class ListaForComponent implements OnInit {
  constructor() {}

  profesores: Profesores[] = [
    { nombre: 'Miguel Ángel' },
    { nombre: 'Luis Miguel' },
    { nombre: 'Rafa Mir' },
  ];
  
  ngOnInit(): void {}
}
