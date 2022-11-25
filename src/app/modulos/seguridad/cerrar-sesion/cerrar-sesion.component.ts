import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent implements OnInit {

  constructor(private servicioSeguridad: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
    this.servicioSeguridad.EliminarInformacionSesion(); // borrar la informacion del localstorage y va a mostar los menus y ocultar lo que no
    this.router.navigate(['/inicio'])
  }


}
