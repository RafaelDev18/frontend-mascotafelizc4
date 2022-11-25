import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectoService } from 'src/app/servicios/prospecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-prospecto',
  templateUrl: './editar-prospecto.component.html',
  styleUrls: ['./editar-prospecto.component.css']
})
export class EditarProspectoComponent implements OnInit {

  id: string = '';

  fgValidadorProspecto: FormGroup = this.fb.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'email': ['', [Validators.required, Validators.email]],
    'telefono': ['', [Validators.required]],
    'comentario': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioProspecto: ProspectoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProspecto();
  }

  BuscarProspecto() {
    this.servicioProspecto.ObtenerRegistrosPorId(this.id).subscribe((datos:ModeloProspecto) => {
      this.fgValidadorProspecto.controls["nombres"].setValue(datos.nombres);
      this.fgValidadorProspecto.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidadorProspecto.controls["email"].setValue(datos.email);
      this.fgValidadorProspecto.controls["telefono"].setValue(datos.telefono);
      this.fgValidadorProspecto.controls["comentario"].setValue(datos.comentario);

    });
  }


  EditarProspecto() {
    let nombres = this.fgValidadorProspecto.controls["nombres"].value;
    let apellidos = this.fgValidadorProspecto.controls["apellidos"].value;
    let email = this.fgValidadorProspecto.controls["email"].value;
    let telefono = this.fgValidadorProspecto.controls["telefono"].value;
    let comentario = this.fgValidadorProspecto.controls["comentario"].value;

    let prospecto = new ModeloProspecto();

    prospecto.id = this.id;
    prospecto.nombres = nombres;
    prospecto.apellidos = apellidos;
    prospecto.email = email;
    prospecto.telefono = telefono;
    prospecto.comentario = comentario;
    this.servicioProspecto.ActualizarProspecto(prospecto).subscribe((datos: ModeloProspecto) => {
      Swal.fire({
        icon: 'success',
        title: '¡Bien Hecho!',
        text: '¡Prospecto Actualizado exitosamente!',
        confirmButtonText: 'Aceptar'
      })
      this.router.navigate(["/administracion/listar-prospectos"]);

    }, (error: any) => {
      Swal.fire({
        icon: 'error',
        title: '¡Lo sentimos!',
        text: '¡Error al Actualizar el prospecto!',
        confirmButtonText: 'Aceptar'
      })
    });
  }

}
