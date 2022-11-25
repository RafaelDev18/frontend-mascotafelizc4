import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProductoPlan } from 'src/app/modelos/productoPlan.modelo';
import { ProductoPlanService } from 'src/app/servicios/producto-plan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-producto-plan',
  templateUrl: './editar-producto-plan.component.html',
  styleUrls: ['./editar-producto-plan.component.css']
})
export class EditarProductoPlanComponent implements OnInit {
  id: string = '';

  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'tipo': ['', [Validators.required]],
    'descripcion': [[''], Validators.required],
    'precio': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioProductoPlan: ProductoPlanService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProducto();
  }


  BuscarProducto() {
    this.servicioProductoPlan.ObtenerRegistrosPorId(this.id).subscribe((datos:ModeloProductoPlan) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["tipo"].setValue(datos.tipo);
      this.fgValidador.controls["precio"].setValue(datos.precio);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
    });
  }

  EditarProductoPlan() {
    let nombre = this.fgValidador.controls["nombre"].value;
    let tipo = this.fgValidador.controls["tipo"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    //let precio = this.fgValidador.controls["precio"].value;
    let pp = new ModeloProductoPlan();
    pp.id = this.id;
    pp.nombre = nombre;
    pp.tipo = tipo;
    pp.descripcion = descripcion;
    pp.precio = precio;
    this.servicioProductoPlan.ActualizarProductoPlan(pp).subscribe((datos: ModeloProductoPlan) => {
      Swal.fire({
        icon: 'success',
        title: '¡Bien Hecho!',
        text: '¡Producto Actualizado exitosamente!',
        confirmButtonText: 'Aceptar'
      })
      this.router.navigate(["/administracion/listar-productosPlanes"]);

    }, (error: any) => {
      Swal.fire({
        icon: 'error',
        title: '¡Lo sentimos!',
        text: '¡Error al Actualizar el producto!',
        confirmButtonText: 'Aceptar'
      })
    });
  }
}
