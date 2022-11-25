import { Component, OnInit } from '@angular/core';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-plan',
  templateUrl: './buscar-plan.component.html',
  styleUrls: ['./buscar-plan.component.css']
})
export class BuscarPlanComponent implements OnInit {

  listadoPL: ModeloPlan[] = []; 

  constructor(private planServicio: PlanService) { }

  ngOnInit(): void {
    this.ObteneListadoPL();
  }

  ObteneListadoPL(){
    this.planServicio.ObtenerRegistros().subscribe((datos: ModeloPlan[]) => {
      this.listadoPL = datos;
    })
}

EliminarPlan(id:string){
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
      this.planServicio.EliminarPlan(id).subscribe((datos:ModeloPlan) => {
        Swal.fire({
          icon: 'success',
          title: '¡Eliminado!',
          text: 'El Plan Fue Eliminado',
        });
        this.ObteneListadoPL();
      }, 
      (error: any) => {
        Swal.fire({
          icon: 'warning',
          title: 'Error!',
          text: 'Error al eliminar el plan',
        });
      })
    }
  })  
}
}
