import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarLineaComponent } from './components/LineasAcademicas/listar-linea/listar-linea.component';
import { AddLineaComponent} from './components/LineasAcademicas/add-linea/add-linea.component';
import { UpdateLineaComponent} from './components/LineasAcademicas/update-linea/update-linea.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ListarPlanComponent } from './components/PlanAcademico/listar-plan/listar-plan.component';
import { AddPlanComponent } from './components/PlanAcademico/add-plan/add-plan.component';
import { UpdatePlanComponent } from './components/PlanAcademico/update-plan/update-plan.component';
import { ModuloConfigComponent } from './components/Modulos/modulo-config/modulo-config.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { PlanLineaComponent } from './components/PlanLinea/plan-linea/plan-linea.component';

const routes: Routes = [
  { path: 'moduloconfig', component: ModuloConfigComponent},
  { path: 'moduloconfig/linea/listar', component: ListarLineaComponent},
  { path: 'linea/agregar', component: AddLineaComponent},
  { path: 'linea/editar/:id', component: UpdateLineaComponent},
  { path: 'home', component: HomeComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'login', component: LoginComponent},
  { path: 'moduloconfig/plan/listar', component: ListarPlanComponent},
  { path: 'plan/agregar', component: AddPlanComponent},
  { path: 'plan/editar/:id', component: UpdatePlanComponent},
  { path: 'moduloconfig/planlinea/listar',component: PlanLineaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
