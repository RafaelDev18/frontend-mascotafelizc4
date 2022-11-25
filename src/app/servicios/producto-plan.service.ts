import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProductoPlan } from '../modelos/productoPlan.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoPlanService {
  url = 'https://backend-mascotafelizc4.vercel.app';
  token: string = '';

  constructor(private http: HttpClient,
    private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros(): Observable<ModeloProductoPlan[]> {
    return this.http.get<ModeloProductoPlan[]>(`${this.url}/productos-servicios`);
  }

  ObtenerRegistrosPorId(id:string): Observable<ModeloProductoPlan> {
    return this.http.get<ModeloProductoPlan>(`${this.url}/productos-servicios/${id}`);
  }

  CrearProductoPlan(pp: ModeloProductoPlan): Observable<ModeloProductoPlan> {
    return this.http.post<ModeloProductoPlan>(`${this.url}/productos-servicios`, pp, {
      headers: new HttpHeaders({
        'Authotization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarProductoPlan(pp: ModeloProductoPlan): Observable<ModeloProductoPlan> {
    return this.http.put<ModeloProductoPlan>(`${this.url}/productos-servicios/${pp.id}`, pp, {
      headers: new HttpHeaders({
        'Authotization': `Bearer ${this.token}`
      })
    })
  }

  EliminarProductoPlan(id: string):Observable<any>{
    return this.http.delete(`${this.url}/productos-servicios/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}` 
      })
    })
  }
}
