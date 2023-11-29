import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComprasService } from '../servicios/compras.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-visualizar-compra',
  templateUrl: './visualizar-compra.component.html',
  styleUrls: ['./visualizar-compra.component.css']
})
export class VisualizarCompraComponent {
  collapsed: boolean = false;
  compra: any;
  detalleCompra: any[] = [];

  constructor(private http: HttpClient,private route: ActivatedRoute, private compraService: ComprasService) { }

  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Obtén la categoría seleccionada del servicio
      this.compra = this.compraService.getcompraSeleccionado();
    });
    this.obtenerDetallesVenta(this.compra?.idCompra);
  }

  obtenerDetallesVenta(id: number) {
    this.http.get<any>('http://localhost:9005/sandec/detalleCompra/'+id).subscribe(
      (response: any) => {
        if (response.intStatus === 200) {
          this.detalleCompra = response.strAnswer;
          console.log(this.detalleCompra);
        } else {
          console.log('Error1');
          console.log(id);
          // Manejar otros códigos de estado si es necesario
        }
      },
      (error: any) => {
        console.log('Error2');
        // Manejar errores de la solicitud HTTP
      }
    );
  }

  // Método para manejar el cambio en collapsed
  onCollapsedChange(isCollapsed: boolean) {
    this.collapsed = isCollapsed;
  }
}
