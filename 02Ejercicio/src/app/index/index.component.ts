import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }
  hiden = false;

  visibilityOf(){
    this.hiden = !this.hiden;
  }

  ngOnInit(): void {
  }

}
