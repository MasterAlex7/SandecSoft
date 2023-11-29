import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ProductionComponent } from './production/production.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { VentasCrearComponent } from './ventas-crear/ventas-crear.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaVentasComponent } from './lista-ventas/lista-ventas.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { ConfiguracionMenuComponent } from './configuracion-menu/configuracion-menu.component';
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
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { ReportesHomeComponent } from './reportes-home/reportes-home.component';
import { RegistrarVendedorComponent } from './registrar-vendedor/registrar-vendedor.component';
import { ListarVendedoresComponent } from './listar-vendedores/listar-vendedores.component';
import { EditarVendedorComponent } from './editar-vendedor/editar-vendedor.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { VisualizarProductoComponent } from './visualizar-producto/visualizar-producto.component';
import { CrearReporteVentaComponent } from './crear-reporte-venta/crear-reporte-venta.component';
import { CrearReporteProductosComponent } from './crear-reporte-productos/crear-reporte-productos.component';
import { CrearReporteComprasComponent } from './crear-reporte-compras/crear-reporte-compras.component';
import { ListadoComprasComponent } from './listado-compras/listado-compras.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NotifierModule  } from 'angular-notifier';
import { VisualizarVentaComponent } from './visualizar-venta/visualizar-venta.component';
import { RegistrarCompraComponent } from './registrar-compra/registrar-compra.component';
import { VisualizarCompraComponent } from './visualizar-compra/visualizar-compra.component';

const routes: Routes = [
  { path: 'ventas-crear', component: VentasCrearComponent }, 
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  {path:  'reportes', component:ReportesHomeComponent},
  { path: 'lista-ventas', component: ListaVentasComponent},
  { path: 'registrar-producto', component:RegistrarProductoComponent},
  { path: 'listado-productos', component: ListadoProductosComponent},
  { path: 'listado-prestamos', component: ListadoPrestamoComponent},
  { path: 'configuracion-menu', component: ConfiguracionMenuComponent},
  { path: 'editar-producto/:id', component:EditarProductoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ProductionComponent,
    HomeComponent,
    VentasCrearComponent,
    ListaVentasComponent,
    RegistrarProductoComponent,
    ListadoProductosComponent,
    ConfiguracionMenuComponent,
    RegistrarCategoriaComponent,
    ListadoCategoriaComponent,
    EditarCategoriaComponent,
    RegistrarProveedorComponent,
    ListadoProveedorComponent,
    EditarProveedorComponent,
    RegistrarPrestamoComponent,
    ListadoPrestamoComponent,
    EditarPrestamoComponent,
    RegistrarClienteComponent,
    ListadoClienteComponent,
    EditarClienteComponent,
    EditarProductoComponent,
    ReportesHomeComponent,
    RegistrarVendedorComponent,
    ListarVendedoresComponent,
    EditarVendedorComponent,
    VisualizarProductoComponent,
    CrearReporteVentaComponent,
    CrearReporteProductosComponent,
    CrearReporteComprasComponent,
    ListadoComprasComponent,
    VisualizarVentaComponent,
    RegistrarCompraComponent,
    VisualizarCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDividerModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatAutocompleteModule,
    [NotifierModule],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
