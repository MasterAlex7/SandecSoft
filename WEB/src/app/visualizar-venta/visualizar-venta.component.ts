import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VentasService } from '../servicios/ventas.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-visualizar-venta',
  templateUrl: './visualizar-venta.component.html',
  styleUrls: ['./visualizar-venta.component.css']
})
export class VisualizarVentaComponent {
  collapsed: boolean = false;
  venta: any;
  detalleVentas: any[] = [];

  constructor(private http: HttpClient,private route: ActivatedRoute, private ventaService: VentasService) { }

  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Obtén la categoría seleccionada del servicio
      this.venta = this.ventaService.getVentaSeleccionada();
      console.log(this.venta);
    });
    this.obtenerDetallesVenta(this.venta?.id);
  }

  obtenerDetallesVenta(id: number) {
    this.http.get<any>('http://localhost:9005/sandec/detalleVenta/'+id).subscribe(
      (response: any) => {
        if (response.intStatus === 200) {
          this.detalleVentas = response.strAnswer;
          console.log(this.detalleVentas);
        } else {
          // Manejar otros códigos de estado si es necesario
        }
      },
      (error: any) => {
        // Manejar errores de la solicitud HTTP
      }
    );
  }

  // Método para manejar el cambio en collapsed
  onCollapsedChange(isCollapsed: boolean) {
    this.collapsed = isCollapsed;
  }
}
