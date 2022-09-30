import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  name = '';
  icon = 'visibility';
  password = '';
  hide = true;
  iconRigth = 'icon-rigth';
  flex = 'display-flex';
  showPassword() {
    if (this.hide == true) {
      this.hide = !this.hide;
      this.icon = 'visibility_off';
    } else {
      this.hide = !this.hide;
      this.icon = 'visibility';
    }
  }
  ngOnInit(): void {}
}
