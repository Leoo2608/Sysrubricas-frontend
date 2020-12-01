import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UnidadAcademica } from 'src/app/models/unidad-academica';
import { UnidadAcademicaService } from 'src/app/services/unidad-academica.service';

@Component({
  selector: 'app-unidad-academica',
  templateUrl: './unidad-academica.component.html',
  styleUrls: ['./unidad-academica.component.css']
})

export class UnidadAcademicaComponent implements OnInit {

  constructor(private unidadService: UnidadAcademicaService) { }
  unidad: any;
  ngOnInit(): void {
  }
  listarCampus():void{
    this.unidadService.getCampus().subscribe(
      (data)=>{
        this.unidad = data['CURSOR_U'];
        console.log(this.unidad)
      }
    )
  }
}
