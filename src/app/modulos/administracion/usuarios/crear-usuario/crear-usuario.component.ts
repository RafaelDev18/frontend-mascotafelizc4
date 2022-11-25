import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {


  fgValidadorUsuario: FormGroup = this.fb.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'documento' : ['', [Validators.required]],
    'email': ['', [Validators.required, Validators.email]],
    'telefono': ['', [Validators.required]],
    'rol': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

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
      this.router.navigate(["/administracion/listar-usuarios"]);

    }, (error: any) => {
      Swal.fire({
        icon: 'error',
        title: '¡Lo sentimos!',
        text: '¡Error al crear el usuario!',
        confirmButtonText: 'Aceptar'
      })
    });
  }

}
