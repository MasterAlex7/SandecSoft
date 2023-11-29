import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-reporte-productos',
  templateUrl: './crear-reporte-productos.component.html',
  styleUrls: ['./crear-reporte-productos.component.css']
})
export class CrearReporteProductosComponent {
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
