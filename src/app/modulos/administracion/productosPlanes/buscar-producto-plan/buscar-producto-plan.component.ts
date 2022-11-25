import { Component, OnInit } from '@angular/core';
import { ModeloProductoPlan } from 'src/app/modelos/productoPlan.modelo';
import { ProductoPlanService } from 'src/app/servicios/producto-plan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-producto-plan',
  templateUrl: './buscar-producto-plan.component.html',
  styleUrls: ['./buscar-producto-plan.component.css']
})
export class BuscarProductoPlanComponent implements OnInit {


  listadoPP: ModeloProductoPlan[] = []; 

  constructor(private productoPlanServicio: ProductoPlanService) { }

  ngOnInit(): void {
    this.ObtenerListadoPP();
  }


  ObtenerListadoPP(){
      this.productoPlanServicio.ObtenerRegistros().subscribe((datos: ModeloProductoPlan[]) => {
        this.listadoPP = datos;
      })
  }

  EliminarProductoPlan(id:string){
    Swal.fire({
      title: '¿Estas Seguro De Eliminar El Producto?',
      text: "Despues De Eliminado, ¡No Se Podrá Recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Si, Eliminalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoPlanServicio.EliminarProductoPlan(id).subscribe((datos:ModeloProductoPlan) => {
          Swal.fire({
            icon: 'success',
            title: '¡Eliminado!',
            text: 'El Producto Fue Eliminado'
          });
          this.ObtenerListadoPP();
        }, 
        (error: any) => {
          Swal.fire({
          icon: 'warning',
          text: 'Error al eliminar el producto'
        });

        })
      }
    })  
  }
  

}
