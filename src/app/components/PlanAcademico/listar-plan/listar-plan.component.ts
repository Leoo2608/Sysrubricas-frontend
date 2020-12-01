import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanAcademico } from 'src/app/models/plan-academico';
import { PlanAcademicoService } from 'src/app/services/plan-academico.service';
import { UnidadAcademicaService } from 'src/app/services/unidad-academica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-plan',
  templateUrl: './listar-plan.component.html',
  styleUrls: ['./listar-plan.component.css']
})
export class ListarPlanComponent implements OnInit {
  planes:any;
  planModel: PlanAcademico = new PlanAcademico();

  constructor(private unidadService:UnidadAcademicaService ,private planService:PlanAcademicoService, private router:Router) { 
  }
  ngOnInit(): void {
    this.traerCampus();
  }
  /*Filtros*/
  campus:any;
  facultades:any;
  escuelas:any;
  nom:string;
  
  traerCampus(){
    this.unidadService.getCampus().subscribe((data)=>{
        this.campus = data['CURSOR_U'];
        console.log(this.campus)
      }
    )
  }
  
  traerFacultad(value:any){
    console.log('Activado, Resultado:')
    console.log(value);
    this.unidadService.getFacultad(value).subscribe(
      (data)=>{
        const filtered = data['CURSOR_U'].filter(function (el) {

          return el.FACULTADES != null;
        });
        this.facultades = filtered;
        console.log(this.facultades)
      }
    )
  }

  traerEscuela(value){
    console.log('Activado, Resultado:')
    console.log(value);
    this.unidadService.getEscuela(value).subscribe(
      (data)=>{
        this.escuelas = data['CURSOR_U']
        console.log(this.escuelas)
      }
    )
  }
  filtrado = "No";
  filt(){
    this.filtrado = "Si";
  }
  /*Filtros*/
  idunidad = null;
  listarPlanes(value){
    this.idunidad = value;
    console.log('consegui el idunidad'+this.idunidad)
    this.planService.getPlanesAcademicosxUnidad(value).subscribe(
      (data)=>{
        this.planes = data['CURSOR_P'];
        console.log(this.planes);
      }
    )
  }
  showButtonAdd = "Si";
  showButtonsUpdate = "No";

  delPlan(num:number):void{
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
          this.planService.deletePlanAcademico(num).subscribe(
            response=>{
              console.log(response)
              this.listarPlanes(this.idunidad);
            }
          )
        }
      }
    )
  
  }
  create():void{
    this.planModel.idunidad = this.idunidad;
    this.planService.addPlanAcademico(this.planModel).subscribe(
      response=>{
        Swal.fire('Nuevo Plan', `El Plan ${this.planModel.nombre} ha sido creado con exito`, "success")
        console.log(this.planModel);
        console.log(response);
      }
    )
    this.limpiar();
    this.listarPlanes(this.idunidad); // actualiza el listado
  }
  cargarPlan(num:number):void{
    this.showButtonsUpdate = 'Si';
    this.showButtonAdd = 'No';
    this.planService.getPlanAcademico(num).subscribe(
      (data)=>{
      this.planes=data['CURSOR_P'] 
      this.planModel.idplan=this.planes[0].IDPLAN;
      this.planModel.nombre=this.planes[0].NOMBRE;
      this.planModel.ciclos=this.planes[0].CICLOS;
      this.planModel.cursos=this.planes[0].CURSOS;
      this.planModel.creditos=this.planes[0].CREDITOS;
      this.planModel.anio_inicio=this.planes[0].ANIO_INICIO;
      this.planModel.anio_termino=this.planes[0].ANIO_TERMINO;
      }
    )
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
          console.log(this.planModel.idplan)
          if(result.isConfirmed){
            Swal.fire(
              'Actualizado!',
              'El registro ha sido actualizado.',
              'success'
              )
              this.planModel.idunidad = this.idunidad;
              this.planService.updatePlanAcademico(this.planModel, this.planModel.idplan).subscribe(
                response=>{
                  console.log(this.planModel);
                  console.log(response);
                }
              ) 
              this.cancelar();
            }
          }   
    )
  }
  cancelar(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.listarPlanes(this.idunidad);
    this.limpiar();
  }
  limpiar(){
    this.planModel.nombre = "";
    this.planModel.ciclos = null;
    this.planModel.cursos = null;
    this.planModel.creditos = null;
    this.planModel.anio_inicio = "";
    this.planModel.anio_termino = "";
  }
}
