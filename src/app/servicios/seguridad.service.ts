import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = 'https://backend-mascotafelizc4.vercel.app';
  token: string = '';
  datosUsuarioEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar()); // revisa el comportamiento de la variable especifica

  constructor(private http: HttpClient,
    private seguridadServicio: SeguridadService) { 
    this.VerificarSesionActual(); // cuando se ejecute este servicio verifique el estado de la sesion
    this.token = this.seguridadServicio.ObtenerToken();
  }

  // verifica si hay un sesion activa
  VerificarSesionActual(){
    let datos =this.ObtenerInformacionSesion();
    if(datos){ 
      this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos: ModeloIdentificar){
    this.datosUsuarioEnSesion.next(datos);
  }

  ObtenerDatosUsuarioEnSesion(){
    return this.datosUsuarioEnSesion.asObservable(); // retorna como un Observable
  }

  Identificar(usuario: string, clave: string): Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarUsuario`, {
      usuario: usuario,
      clave: clave
    },{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  AlmacenarSesion(datos: ModeloIdentificar){
    datos.estaIdentificado = true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion", stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  ObtenerInformacionSesion(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos;
    }else{
      return null;
    }
  }

  EliminarInformacionSesion(){
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModeloIdentificar());
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: '¡Vuelve Pronto!',
      text: 'Sesión Finalizada',
      showConfirmButton: false,
      timer: 1500
    })
  }

  //me retorna false o true segun la comparacion del metodo ObtenerInformacionSesion()
  SeHaInicioSesion(){
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }

  ObtenerToken(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos.tk;
    }else{
      return '';
    }
  }
}
