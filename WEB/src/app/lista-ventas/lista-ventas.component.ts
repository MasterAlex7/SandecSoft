import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VentasService } from '../servicios/ventas.service';

@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.component.html',
  styleUrls: ['./lista-ventas.component.css']
})
export class ListaVentasComponent {
  collapsed: boolean = false;
  ventas: any[] = []; 

  constructor(private http: HttpClient,private router: Router,private ventaService: VentasService) { }


  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas() {
    this.http.get<any>('http://localhost:9005/sandec/ventas')
      .subscribe(response => {
        if (response.intStatus === 200) {
          this.ventas = response.strAnswer;
          console.log(this.ventas);
        } else {
          // Manejar errores si es necesario
        }
      }, error => {
        // Manejar errores de la solicitud HTTP
      });
  }

  visualizarVenta(venta: any) {
    this.ventaService.setVentaSeleccionada(venta); // Almacena la categoría seleccionada en el servicio
    this.router.navigate(['/visualizar-venta', venta.id]); // Navega a la página de edición con el ID
  }

  cancelarVenta(venta: any) {
    this.ventaService.setVentaSeleccionada(venta); // Almacena la categoría seleccionada en el servicio
    this.router.navigate(['/visualizar-venta', venta.id]); // Navega a la página de edición con el ID
  }

  // Método para manejar el cambio en collapsed
  onCollapsedChange(isCollapsed: boolean) {
    this.collapsed = isCollapsed;
  }

}
