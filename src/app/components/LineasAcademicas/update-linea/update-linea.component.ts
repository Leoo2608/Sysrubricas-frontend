import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineaAcademica } from 'src/app/models/linea-academica';
import { LineaAcademicaService } from 'src/app/services/linea-academica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-linea',
  templateUrl: './update-linea.component.html',
  styleUrls: ['./update-linea.component.css']
})
export class UpdateLineaComponent implements OnInit {
  lineaModel:LineaAcademica = new LineaAcademica();
  constructor(private lineaService:LineaAcademicaService, private router: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  public prueba():void{
    console.log("Este es el ID: "+parseInt(this.activatedRoute.snapshot.params['id']));
  }
  public update():void{
    Swal.fire({
      title: '¿Desea actualizar el regsitro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then(
        (result)=>{
          if(result.isConfirmed){
            Swal.fire(
              'Actualizado!',
              'El registro ha sido actualizado.',
              'success'
              )
              this.router.navigate(['/linea/listar'])
              this.lineaService.updateLineaAcademica(this.lineaModel, parseInt(this.activatedRoute.snapshot.params['id'])).subscribe(
                response=>{
                  console.log(response);
                }
              )
          
            }
          }
        
    )
  }
    
}
