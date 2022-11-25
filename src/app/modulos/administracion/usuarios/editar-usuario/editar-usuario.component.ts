import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  id: string = '';

  fgValidadorUsuario: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'documento' : ['', [Validators.required]],
    'email': ['', [Validators.required, Validators.email]],
    'telefono': ['', [Validators.required]],
    'rol': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarUsuario();
  }

  BuscarUsuario() {
    this.servicioUsuario.ObtenerRegistrosPorId(this.id).subscribe((datos:ModeloUsuario) => {
      this.fgValidadorUsuario.controls["id"].setValue(this.id);
      this.fgValidadorUsuario.controls["nombres"].setValue(datos.nombres);
      this.fgValidadorUsuario.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidadorUsuario.controls["documento"].setValue(datos.cedula);
      this.fgValidadorUsuario.controls["email"].setValue(datos.email);
      this.fgValidadorUsuario.controls["telefono"].setValue(datos.telefono);
      this.fgValidadorUsuario.controls["rol"].setValue(datos.rol);

    });
  }

  EditarUsuario() {
    let nombres = this.fgValidadorUsuario.controls["nombres"].value;
    let apellidos = this.fgValidadorUsuario.controls["apellidos"].value;
    let documento = this.fgValidadorUsuario.controls["documento"].value;
    let email = this.fgValidadorUsuario.controls["email"].value;
    let telefono = this.fgValidadorUsuario.controls["telefono"].value;
    let rol = this.fgValidadorUsuario.controls["rol"].value;

    let usuario = new ModeloUsuario();
    usuario.id = this.id;
    usuario.nombres = nombres;
    usuario.apellidos = apellidos;
    usuario.cedula = documento;
    usuario.email = email;
    usuario.telefono = telefono;
    usuario.rol = rol;
    this.servicioUsuario.ActualizarUsuario(usuario).subscribe((datos: ModeloUsuario) => {
      Swal.fire({
        icon: 'success',
        title: '¡Bien Hecho!',
        text: '¡Usuario Actualizado exitosamente!',
        confirmButtonText: 'Aceptar'
      })
      this.router.navigate(["/administracion/listar-usuarios"]);

    }, (error: any) => {
      Swal.fire({
        icon: 'error',
        title: '¡Lo sentimos!',
        text: '¡Error al Actualizar el usuario!',
        confirmButtonText: 'Aceptar'
      })
    });
  }

}
