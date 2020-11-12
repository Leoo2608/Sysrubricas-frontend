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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddLineaComponent,
    ListarLineaComponent,
    UpdateLineaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
