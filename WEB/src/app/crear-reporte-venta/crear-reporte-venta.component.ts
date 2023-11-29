import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-reporte-venta',
  templateUrl: './crear-reporte-venta.component.html',
  styleUrls: ['./crear-reporte-venta.component.css']
})
export class CrearReporteVentaComponent {
  fechaInicio: any;
  fechaFin: any;
  collapsed: boolean = false;


  generarReporte(){

  }

    // Método para manejar el cambio en collapsed
    onCollapsedChange(isCollapsed: boolean) {
      this.collapsed = isCollapsed;
    }
}
