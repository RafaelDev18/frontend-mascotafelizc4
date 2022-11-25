import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-plan',
  templateUrl: './editar-plan.component.html',
  styleUrls: ['./editar-plan.component.css']
})
export class EditarPlanComponent implements OnInit {

  id: string = '';

  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'descripcion': [[''], Validators.required],
    'precio': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioPlan: PlanService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarPlan();
  }


  BuscarPlan() {
    this.servicioPlan.ObtenerRegistrosPorId(this.id).subscribe((datos:ModeloPlan) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["precio"].setValue(datos.precio);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
    });
  }

  EditarPlan() {
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    //let precio = this.fgValidador.controls["precio"].value;
    let pl = new ModeloPlan();
    pl.id = this.id;
    pl.nombre = nombre;
    pl.descripcion = descripcion;
    pl.precio = precio;
    this.servicioPlan.ActualizarPlan(pl).subscribe((datos: ModeloPlan) => {
      Swal.fire({
        icon: 'success',
        title: '¡Bien Hecho!',
        text: '¡Plan Actualizado exitosamente!',
        confirmButtonText: 'Aceptar'
      })
      this.router.navigate(["/administracion/listar-planes"]);

    }, (error: any) => {
      Swal.fire({
        icon: 'error',
        title: '¡Lo sentimos!',
        text: '¡Error al Actualizar el plan!',
        confirmButtonText: 'Aceptar'
      })
    });
  }

}
