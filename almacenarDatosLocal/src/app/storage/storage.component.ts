import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css'],
})
export class StorageComponent implements OnInit {
  localDate = '';

  constructor() {}

  ngOnInit(): void {}

  guardar() {
    //data es el nombre que le quiera `poner a ese dato y el valor
    localStorage.setItem('data', this.localDate);
    alert('Dato guardado');
    this.localDate = '';
  }
}
