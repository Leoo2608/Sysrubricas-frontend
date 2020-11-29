import { Injectable } from '@angular/core';
import { PlanLinea } from '../models/plan-linea';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanLineaService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private url: string = 'http://localhost:9090/api';
  constructor(private http:HttpClient) { }

  getPlanesLineas(): Observable<PlanLinea[]>{
    return this.http.get<PlanLinea[]>(this.url+'/planlineas')
  }

  getPlanLinea(id:number):Observable<Object>{
    return this.http.get(this.url+'/planlineas/'+id);
  }

  addPlanLinea(planlinea: PlanLinea): Observable<number>{
    return this.http.post<number>(this.url+'/planlineas/add', planlinea, {headers:this.httpHeaders});
  }

  deletePlanLinea(id:number): Observable<number>{
    return this.http.delete<number>(this.url+'/planlineas/delete/'+id,{headers:this.httpHeaders});
  }
  updatePlanLinea(planlinea: PlanLinea, id:number):Observable<number>{
    return this.http.put<number>(this.url+'/planlineas/update/'+id, planlinea,{headers:this.httpHeaders});
  }
}
