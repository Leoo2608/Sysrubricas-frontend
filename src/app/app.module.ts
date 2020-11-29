import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddLineaComponent } from './components/LineasAcademicas/add-linea/add-linea.component';
import { ListarLineaComponent } from './components/LineasAcademicas/listar-linea/listar-linea.component';
import { UpdateLineaComponent } from './components/LineasAcademicas/update-linea/update-linea.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarPlanComponent } from './components/PlanAcademico/listar-plan/listar-plan.component';
import { AddPlanComponent } from './components/PlanAcademico/add-plan/add-plan.component';
import { UpdatePlanComponent } from './components/PlanAcademico/update-plan/update-plan.component';
import { ModuloConfigComponent } from './components/Modulos/modulo-config/modulo-config.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { PlanLineaComponent } from './components/PlanLinea/plan-linea/plan-linea.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddLineaComponent,
    ListarLineaComponent,
    UpdateLineaComponent,
    ListarPlanComponent,
    AddPlanComponent,
    UpdatePlanComponent,
    ModuloConfigComponent,
    MenuComponent,
    FooterComponent,
    PlanLineaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HomeComponent,
    ModuloConfigComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
