import { Injectable } from '@angular/core';
import { PlanAcademico } from '../models/plan-academico';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanAcademicoService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private url: string = 'http://localhost:9090/api';
  constructor(private http: HttpClient) { }

  getPlanesAcademicos(): Observable<PlanAcademico[]>{
    return this.http.get<PlanAcademico[]>(this.url+'/planes');
  }
  getPlanAcademico(id:number):Observable<Object>{
    return this.http.get(this.url+'/planes/'+id);
  }
  addPlanAcademico(plan: PlanAcademico):Observable<number>{
    return this.http.post<number>(this.url+'/planes/add', plan, {headers:this.httpHeaders});
  }
  deletePlanAcademico(id:number):Observable<number>{
    return this.http.delete<number>(this.url+'/planes/delete/'+id, {headers:this.httpHeaders});
  }
  updatePlanAcademico(plan: PlanAcademico, id:number):Observable<number>{
    return this.http.put<number>(this.url+'/planes/update/'+id,plan,{headers:this.httpHeaders});
  }
  getPlanesAcademicosxUnidad(id:number): Observable<PlanAcademico[]>{
    return this.http.get<PlanAcademico[]>(this.url+'/planes/xunidad/'+id);
  }
}
