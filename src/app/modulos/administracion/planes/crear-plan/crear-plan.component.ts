import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.css']
})
export class CrearPlanComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({

    'nombre': ['', [Validators.required]],
    'descripcion': [[''], Validators.required],
    'precio': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioProductoPlan: PlanService,
    private router: Router) { }

  ngOnInit(): void {

  }

  GuardarPlan() {
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    //let precio = this.fgValidador.controls["precio"].value;
    let pl = new ModeloPlan();
    pl.nombre = nombre;
    pl.descripcion = descripcion;
    pl.precio = precio;
    this.servicioProductoPlan.CrearPlan(pl).subscribe((datos: ModeloPlan) => {
      Swal.fire({
        icon: 'success',
        title: '¡Bien Hecho!',
        text: '¡Plan creado exitosamente!',
        confirmButtonText: 'Aceptar'
      })
      this.router.navigate(["/administracion/listar-planes"]);

    }, (error: any) => {
      Swal.fire({
        icon: 'error',
        title: '¡Lo sentimos!',
        text: '¡Error al crear el plan!',
        confirmButtonText: 'Aceptar'
      })
    });
  }

}
