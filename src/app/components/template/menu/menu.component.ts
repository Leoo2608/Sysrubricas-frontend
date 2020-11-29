import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ModuloConfigComponent } from '../../Modulos/modulo-config/modulo-config.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public modConfig: ModuloConfigComponent, private router:Router) { }

  ngOnInit(): void {
  }
  isModConf():boolean{
    if(this.router.url==='/moduloconfig' || this.router.url==='/moduloconfig/linea/listar'
    || this.router.url==='/moduloconfig/plan/listar'){
      return true;
    }else{
      return false;
    }
  }
}
