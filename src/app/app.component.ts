import { Component } from '@angular/core';
import { Usuario } from './models/usuario';
import { Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login = false;
  user: Usuario;
  title = 'app-rub2020';
  constructor(private router: Router){ }

  public loginCorrecto():void{
    this.login = !this.login;
  }
  ngOnInit(): void {
  }
}
