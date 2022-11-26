import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from "crypto-js";
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { ProspectoService } from 'src/app/servicios/prospecto.service';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  seInicioSesion: boolean = false;

  subs: Subscription = new Subscription();

  fgValidadorSesion: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'clave': ['', [Validators.required]]
  });

  fgValidadorProspecto: FormGroup = this.fb.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'email': ['', [Validators.required, Validators.email]],
    'telefono': ['', [Validators.required]],
    'comentario': ['', [Validators.required]]
  });

  fgValidadorUsuario: FormGroup = this.fb.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'documento' : ['', [Validators.required]],
    'email': ['', [Validators.required, Validators.email]],
    'telefono': ['', [Validators.required]],
    'rol': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private servicioUsuario: UsuarioService,
    private servicioProspecto: ProspectoService,
    private router: Router) { }

  ngOnInit(): void {
    this.subs = this.servicioSeguridad.ObtenerDatosUsuarioEnSesion().subscribe((datos:ModeloIdentificar) =>{
      this.seInicioSesion = datos.estaIdentificado;
    })
  }

  //metodo para el inicio de sesiondel usuario en el navbar
  IdentificarUsuario(){
    let usuario = this.fgValidadorSesion.controls["usuario"].value;
    let clave = this.fgValidadorSesion.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos:any) => {
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(['/inicio']);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Bienvenido!',
        text: 'Sesión Iniciada',
        showConfirmButton: false,
        timer: 1500
      })
      // alert("datos correctos")
    }, (error:any) => {
      //ko
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: '¡Lo sentimos!',
        text: 'Datos Invalidos',
        confirmButtonColor: '#FFC107',
        confirmButtonText: 'Aceptar'
      })
      // alert("datos invalidos")
    })
  }

  //Metodo para crear un usuario desde registrar
  GuardarUsuario() {
    let nombres = this.fgValidadorUsuario.controls["nombres"].value;
    let apellidos = this.fgValidadorUsuario.controls["apellidos"].value;
    let documento = this.fgValidadorUsuario.controls["documento"].value;
    let email = this.fgValidadorUsuario.controls["email"].value;
    let telefono = this.fgValidadorUsuario.controls["telefono"].value;
    let rol = this.fgValidadorUsuario.controls["rol"].value;

    let usuario = new ModeloUsuario();
    usuario.nombres = nombres;
    usuario.apellidos = apellidos;
    usuario.cedula = documento;
    usuario.email = email;
    usuario.telefono = telefono;
    usuario.rol = rol;
    this.servicioUsuario.CrearUsuario(usuario).subscribe((datos: ModeloUsuario) => {
      Swal.fire({
        icon: 'success',
        title: '¡Bien Hecho!',
        text: '¡Usuario creado exitosamente!',
        confirmButtonText: 'Aceptar'
      })
      // this.router.navigate(["/administracion/listar-usuarios"]);

    }, (error: any) => {
      Swal.fire({
        icon: 'error',
        title: '¡Lo sentimos!',
        text: '¡Error al crear el usuario!',
        confirmButtonText: 'Aceptar'
      })
    });
  }

//Metodo para crear el prospecto desde el formulario de contacto
GuardarProspecto() {
  //se guardan los datos del formulario en cada variable
  let nombres = this.fgValidadorProspecto.controls["nombres"].value;
  let apellidos = this.fgValidadorProspecto.controls["apellidos"].value;
  let email = this.fgValidadorProspecto.controls["email"].value;
  let telefono = this.fgValidadorProspecto.controls["telefono"].value;
  let comentario = this.fgValidadorProspecto.controls["comentario"].value;
// se crea la variable que almacena al modelo del prospecto
  let prospecto = new ModeloProspecto();
//se asiganan los datos al modelo
  prospecto.nombres = nombres;
  prospecto.apellidos = apellidos;
  prospecto.email = email;
  prospecto.telefono = telefono;
  prospecto.comentario = comentario;
//se crea el prespecto 
  this.servicioProspecto.CrearProspecto(prospecto).subscribe((datos: ModeloProspecto) => {
    Swal.fire({
      icon: 'success',
      title: '¡Bien Hecho!',
      text: '¡Pronto nos contactaremos contigo!',
      confirmButtonText: 'Aceptar'
    })
    //this.router.navigate(["/administracion/listar-usuarios"]);

  }, (error: any) => {
    Swal.fire({
      icon: 'error',
      title: '¡Lo sentimos!',
      text: '¡Error al diligenciar formato de contacto!',
      confirmButtonText: 'Aceptar'
    })
  });
}
}
