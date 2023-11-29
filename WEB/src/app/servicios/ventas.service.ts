import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  ventaSeleccionada: any; // Almacena la categoría seleccionada

  constructor() { }

  setVentaSeleccionada(venta: any) {
    this.ventaSeleccionada = venta;
  }

  getVentaSeleccionada() {
    return this.ventaSeleccionada;
  }
}
