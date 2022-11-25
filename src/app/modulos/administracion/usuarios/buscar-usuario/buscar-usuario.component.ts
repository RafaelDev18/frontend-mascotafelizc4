import { Component, OnInit } from '@angular/core';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit {

  listadoUsuarios: ModeloUsuario[] = []; 

  constructor(private usuarioServicio: UsuarioService) { }

  ngOnInit(): void {
    this.ObtenerListadoUsuarios();
  }

  ObtenerListadoUsuarios(){
    this.usuarioServicio.ObtenerRegistros().subscribe((datos: ModeloUsuario[]) => {
      this.listadoUsuarios = datos;
    })
}

EliminarUsuario(id:string){
  Swal.fire({
    title: '¿Estas Seguro De Eliminar El Usuario?',
    text: "Despues De Eliminado, ¡No Se Podrá Recuperar!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: "Cancelar",
    confirmButtonText: 'Si, Eliminalo!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.usuarioServicio.EliminarUsuario(id).subscribe((datos:ModeloUsuario) => {
        Swal.fire({
          icon: 'success',
          title: '¡Eliminado!',
          text: 'El Usuario Fue Eliminado'
        });
        this.ObtenerListadoUsuarios();
      }, 
      (error: any) => {
        Swal.fire({
        icon: 'warning',
        text: 'Error al eliminar el usuario'
      });
      })
    }
  })  
}

}
