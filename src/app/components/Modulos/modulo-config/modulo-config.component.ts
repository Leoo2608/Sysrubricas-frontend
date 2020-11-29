import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo-config',
  templateUrl: './modulo-config.component.html',
  styleUrls: ['./modulo-config.component.css']
})
export class ModuloConfigComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
}
