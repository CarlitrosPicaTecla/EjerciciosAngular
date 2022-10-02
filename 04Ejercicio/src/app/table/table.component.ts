import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  shearchText: any;

  alimentos = [
    { nombre: 'Carne Mechada' },
    { nombre: 'Papas fritas' },
    { nombre: 'Tortilla de patatas' },
    { nombre: 'Tortillas de patatas con cebolla' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
