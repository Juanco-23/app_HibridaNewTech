import { Component, OnInit } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
  imports: [IonicModule, CommonModule, RouterModule],
})
export class LoginUserComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}