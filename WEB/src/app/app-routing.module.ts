import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RegistrarCategoriaComponent } from './registrar-categoria/registrar-categoria.component';
import { ListadoCategoriaComponent } from './listado-categoria/listado-categoria.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { RegistrarProveedorComponent } from './registrar-proveedor/registrar-proveedor.component';
import { ListadoProveedorComponent } from './listado-proveedor/listado-proveedor.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';
import { RegistrarPrestamoComponent } from './registrar-prestamo/registrar-prestamo.component';
import { ListadoPrestamoComponent } from './listado-prestamo/listado-prestamo.component';
import { EditarPrestamoComponent } from './editar-prestamo/editar-prestamo.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { ListadoClienteComponent } from './listado-cliente/listado-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { EditarVendedorComponent } from './editar-vendedor/editar-vendedor.component';
import { RegistrarVendedorComponent } from './registrar-vendedor/registrar-vendedor.component';
import { ListarVendedoresComponent } from './listar-vendedores/listar-vendedores.component';
import { VisualizarProductoComponent } from './visualizar-producto/visualizar-producto.component';
import { CrearReporteComprasComponent } from './crear-reporte-compras/crear-reporte-compras.component';
import { CrearReporteProductosComponent } from './crear-reporte-productos/crear-reporte-productos.component';
import { CrearReporteVentaComponent } from './crear-reporte-venta/crear-reporte-venta.component';
import { VisualizarVentaComponent } from './visualizar-venta/visualizar-venta.component';
import { RegistrarCompraComponent } from './registrar-compra/registrar-compra.component';
import { ListadoComprasComponent } from './listado-compras/listado-compras.component';
import { VisualizarCompraComponent } from './visualizar-compra/visualizar-compra.component';

const routes: Routes = [
  {path: 'sidebar', component:SideBarComponent},
  {path: 'registrar-categoria', component:RegistrarCategoriaComponent},
  {path: 'listado-categoria', component:ListadoCategoriaComponent},
  {path: 'editar-categoria/:id', component:EditarCategoriaComponent},
  {path: 'registrar-proveedor', component:RegistrarProveedorComponent},
  {path: 'listado-proveedor', component:ListadoProveedorComponent},
  {path: 'editar-proveedor/:id', component:EditarProveedorComponent},
  {path: 'registrar-prestamo', component: RegistrarPrestamoComponent},
  {path: 'listado-prestamo', component: ListadoPrestamoComponent},
  {path: 'editar-prestamo/:id', component: EditarPrestamoComponent},
  {path: 'registrar-cliente', component: RegistrarClienteComponent},
  {path: 'listado-cliente', component: ListadoClienteComponent},
  {path: 'editar-cliente/:id', component: EditarClienteComponent},
  {path: 'editar-vendedor/:id', component:EditarVendedorComponent},
  {path: 'registrar-vendedor', component: RegistrarVendedorComponent},
  {path: 'listado-vendedores', component: ListarVendedoresComponent},
  {path: 'visualizar-producto/:id', component: VisualizarProductoComponent},
  {path: 'crear-reporte-compras', component:CrearReporteComprasComponent},
  {path: 'crear-reporte-productos', component:CrearReporteProductosComponent},
  {path: 'crear-reporte-ventas', component:CrearReporteVentaComponent},
  {path: 'visualizar-venta/:id', component:VisualizarVentaComponent},
  {path: 'registrar-compra', component:RegistrarCompraComponent},
  {path: 'listado-compras', component:ListadoComprasComponent},
  {path: 'visualizar-compra/:id', component:VisualizarCompraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
