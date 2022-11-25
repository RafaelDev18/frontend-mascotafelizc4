import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProspecto } from '../modelos/prospecto.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProspectoService {

  url = 'https://backend-mascotafelizc4.vercel.app';
  token: string = '';

  constructor(private http: HttpClient) { }

  ObtenerRegistros(): Observable<ModeloProspecto[]> {
    return this.http.get<ModeloProspecto[]>(`${this.url}/prospectos`);
  }

  ObtenerRegistrosPorId(id:string): Observable<ModeloProspecto> {
    return this.http.get<ModeloProspecto>(`${this.url}/prospectos/${id}`);
  }

  CrearProspecto(prospecto: ModeloProspecto): Observable<ModeloProspecto>{
    return this.http.post<ModeloProspecto>(`${this.url}/prospectos`, prospecto, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarProspecto(prospecto: ModeloProspecto): Observable<ModeloProspecto>{
    return this.http.put<ModeloProspecto>(`${this.url}/prospectos/${prospecto.id}`, prospecto, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    } )
  }
  
  EliminarProspecto(id: string): Observable<any> {
    return this.http.delete(`${this.url}/prospectos/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    } )
  }

}
