import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProductoPlan } from 'src/app/modelos/productoPlan.modelo';
import { ProductoPlanService } from 'src/app/servicios/producto-plan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-producto-plan',
  templateUrl: './crear-producto-plan.component.html',
  styleUrls: ['./crear-producto-plan.component.css']
})
export class CrearProductoPlanComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'tipo': ['', [Validators.required]],
    'descripcion': [[''], Validators.required],
    'precio': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioProductoPlan: ProductoPlanService,
    private router: Router) { }

  ngOnInit(): void {

  }

  GuardarProductoPlan() {
    let nombre = this.fgValidador.controls["nombre"].value;
    let tipo = this.fgValidador.controls["tipo"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    //let precio = this.fgValidador.controls["precio"].value;
    let pp = new ModeloProductoPlan();
    pp.nombre = nombre;
    pp.tipo = tipo;
    pp.descripcion = descripcion;
    pp.precio = precio;
    this.servicioProductoPlan.CrearProductoPlan(pp).subscribe((datos: ModeloProductoPlan) => {
      Swal.fire({
        icon: 'success',
        title: '¡Bien Hecho!',
        text: '¡Producto creado exitosamente!',
        confirmButtonText: 'Aceptar'
      })
      this.router.navigate(["/administracion/listar-productosPlanes"]);

    }, (error: any) => {
      Swal.fire({
        icon: 'error',
        title: '¡Lo sentimos!',
        text: '¡Error al crear el producto!',
        confirmButtonText: 'Aceptar'
      })
    });
  }

}
