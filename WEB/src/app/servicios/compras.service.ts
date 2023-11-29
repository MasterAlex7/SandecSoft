import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  compraSeleccionada: any; // Almacena la categoría seleccionada

  constructor() { }

  setCompraSeleccionada(compra: any) {
    this.compraSeleccionada = compra;
  }

  getcompraSeleccionado() {
    return this.compraSeleccionada;
  }
}
