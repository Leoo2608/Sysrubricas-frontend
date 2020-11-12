import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarLineaComponent } from './components/LineasAcademicas/listar-linea/listar-linea.component';
import { AddLineaComponent} from './components/LineasAcademicas/add-linea/add-linea.component';
import { UpdateLineaComponent} from './components/LineasAcademicas/update-linea/update-linea.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'linea/listar', component: ListarLineaComponent},
  { path: 'linea/agregar', component: AddLineaComponent},
  { path: 'linea/editar/:id', component: UpdateLineaComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
