import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LineaAcademicaService } from 'src/app/services/linea-academica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-linea',
  templateUrl: './listar-linea.component.html',
  styleUrls: ['./listar-linea.component.css']
})
export class ListarLineaComponent implements OnInit {
  lineas: any;
  constructor(private lineaService:LineaAcademicaService, private router:Router) { }

  ngOnInit(): void {
      this.listarLinea();
  }

  listarLinea():void{
    this.lineaService.getLineasAcademicas().subscribe(
      (data) =>{
       this.lineas = data['CURSOR_L'];
       console.log(this.lineas);
      })
  }
  delLinea(num:number):void{    
        Swal.fire({
          title: '¿Desea eliminar este registro de forma permanente?',
          text: "No podras revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Confirmar',
          cancelButtonText: 'Cancelar',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'     
        }).then(
          (result)=>{
            if(result.isConfirmed){ 

              Swal.fire(
              'Eliminado!',
              'El registro ha sido eliminado.',
              'success'
              )
              this.lineaService.deleteLineaAcademica(num).subscribe(
                response=>{
                  console.log(response)
                  this.listarLinea();
                }
            )}
            
        
      }
    )
  }

}