import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent {
  collapsed: boolean = false;
  productos: any[] = [];
  p: number = 1;

  constructor(private http: HttpClient,private router: Router,private productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProveedores();
  }

  obtenerProveedores() {
    this.http.get<any>('http://localhost:9005/sandec/productos')
      .subscribe(response => {
        if (response.intStatus === 200) {
          this.productos = response.strAnswer;
        } else {
          // Manejar errores si es necesario
        }
      }, error => {
        // Manejar errores de la solicitud HTTP
      });
  }

  visualizarProducto(producto: any) {
    this.productoService.setProductoSeleccionado(producto); // Almacena la categoría seleccionada en el servicio
    this.router.navigate(['/visualizar-producto', producto.id]); // Navega a la página de edición con el ID
  }

  editarProducto(producto: any) {
    this.productoService.setProductoSeleccionado(producto); // Almacena la categoría seleccionada en el servicio
    this.router.navigate(['/editar-producto', producto.id]); // Navega a la página de edición con el ID
  }

  // Método para manejar el cambio en collapsed
  onCollapsedChange(isCollapsed: boolean) {
    this.collapsed = isCollapsed;
  }

}
