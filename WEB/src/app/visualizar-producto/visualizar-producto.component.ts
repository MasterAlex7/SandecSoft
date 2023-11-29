import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../servicios/producto.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-visualizar-producto',
  templateUrl: './visualizar-producto.component.html',
  styleUrls: ['./visualizar-producto.component.css']
})
export class VisualizarProductoComponent {
  collapsed: boolean = false;
  producto: any;

  constructor(private http: HttpClient,private route: ActivatedRoute, private productoService: ProductoService) { }

  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Obtén la categoría seleccionada del servicio
      this.producto = this.productoService.getproductoSeleccionado();
    });
  }

  // Método para manejar el cambio en collapsed
  onCollapsedChange(isCollapsed: boolean) {
    this.collapsed = isCollapsed;
  }

}
