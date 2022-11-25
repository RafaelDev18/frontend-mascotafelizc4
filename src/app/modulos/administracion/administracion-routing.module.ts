import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { BuscarProductoPlanComponent } from './productosPlanes/buscar-producto-plan/buscar-producto-plan.component';
import { CrearProductoPlanComponent } from './productosPlanes/crear-producto-plan/crear-producto-plan.component';
import { EditarProductoPlanComponent } from './productosPlanes/editar-producto-plan/editar-producto-plan.component';
import { EliminarProductoPlanComponent } from './productosPlanes/eliminar-producto-plan/eliminar-producto-plan.component';
import { BuscarProspectoComponent } from './prospectos/buscar-prospecto/buscar-prospecto.component';
import { CrearProspectoComponent } from './prospectos/crear-prospecto/crear-prospecto.component';
import { EditarProspectoComponent } from './prospectos/editar-prospecto/editar-prospecto.component';
import { EliminarProspectoComponent } from './prospectos/eliminar-prospecto/eliminar-prospecto.component';
import { BuscarSolicitudAfiComponent } from './solicitudesAfi/buscar-solicitud-afi/buscar-solicitud-afi.component';
import { CrearSolicitudAfiComponent } from './solicitudesAfi/crear-solicitud-afi/crear-solicitud-afi.component';
import { EditarSolicitudAfiComponent } from './solicitudesAfi/editar-solicitud-afi/editar-solicitud-afi.component';
import { EliminarSolicitudAfiComponent } from './solicitudesAfi/eliminar-solicitud-afi/eliminar-solicitud-afi.component';
import { BuscarSucursalComponent } from './sucursales/buscar-sucursal/buscar-sucursal.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  // rutas Usuario
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  {
    path: 'editar-usuario/:id',
    component: EditarUsuarioComponent
  },
  {
    path: 'buscar-usuario',
    component: BuscarUsuarioComponent
  },
  {
    path: "listar-usuarios",
    component: BuscarUsuarioComponent
  },
  {
    path: 'eliminar-usuario/:id',
    component: EliminarUsuarioComponent
  },
  // rutas Sucursal
  {
    path: 'crear-sucursal',
    component: CrearSucursalComponent
  },
  {
    path: 'editar-sucursal/:id',
    component: EditarSucursalComponent
  },
  {
    path: 'buscar-sucursal',
    component: BuscarSucursalComponent
  },
  {
    path: 'eliminar-sucursal/:id',
    component: EliminarSucursalComponent
  },
  // rutas solicitudAfiliacion
  {
    path: 'crear-solicitud-afi',
    component: CrearSolicitudAfiComponent
  },
  {
    path: 'editar-solicitud-afi/:id',
    component: EditarSolicitudAfiComponent
  },
  {
    path: 'buscar-solicitud-afi',
    component: BuscarSolicitudAfiComponent
  },
  {
    path: 'eliminar-solicitud-afi/:id',
    component: EliminarSolicitudAfiComponent
  },
  // rutas Producto Plan
  {
    path: 'crear-producto-plan',
    component: CrearProductoPlanComponent
  },
  {
    path: 'editar-producto-plan/:id',
    component: EditarProductoPlanComponent
  },
  {
    path: "listar-productosPlanes",
    component: BuscarProductoPlanComponent
  },
  {
    path: 'buscar-producto-plan',
    component: BuscarProductoPlanComponent
  },
  {
    path: 'eliminar-producto-plan/:id',
    component: EliminarProductoPlanComponent
  },
  // rutas Planes
  {
    path: 'crear-plan',
    component: CrearPlanComponent
  },
  {
    path: 'editar-plan/:id',
    component: EditarPlanComponent
  },
  {
    path: "listar-planes",
    component: BuscarPlanComponent
  },
  {
    path: 'buscar-plan',
    component: BuscarPlanComponent
  },
  {
    path: 'eliminar-plan/:id',
    component: EliminarPlanComponent
  },

  // rutas Prospectos
  {
    path: 'crear-prospecto',
    component: CrearProspectoComponent
  },
  {
    path: 'editar-prospecto/:id',
    component: EditarProspectoComponent
  },
  {
    path: "listar-prospectos",
    component: BuscarProspectoComponent
  },
  {
    path: 'buscar-prospecto',
    component: BuscarProspectoComponent
  },
  {
    path: 'eliminar-prospecto/:id',
    component: EliminarProspectoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
