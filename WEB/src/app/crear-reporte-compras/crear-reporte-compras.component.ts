import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-reporte-compras',
  templateUrl: './crear-reporte-compras.component.html',
  styleUrls: ['./crear-reporte-compras.component.css']
})
export class CrearReporteComprasComponent {
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
