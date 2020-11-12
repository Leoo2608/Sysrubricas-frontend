import { Component, OnInit } from '@angular/core';
import { LineaAcademica } from 'src/app/models/linea-academica';
import { LineaAcademicaService } from 'src/app/services/linea-academica.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-linea',
  templateUrl: './add-linea.component.html',
  styleUrls: ['./add-linea.component.css']
})
export class AddLineaComponent implements OnInit {

  lineaModel:LineaAcademica = new LineaAcademica();
  constructor(private lineaService:LineaAcademicaService, private router: Router,private activatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void { }
  
  public create():void{
    this.lineaService.addLineaAcademica(this.lineaModel).subscribe(
      response=>{
        this.router.navigate(['/linea/listar'])
        swal.fire('Nueva Línea', `Línea ${this.lineaModel.nombre} creado con exito`, "success")
        console.log(this.lineaModel);
        console.log(response);
      }
    )
  }
  
}