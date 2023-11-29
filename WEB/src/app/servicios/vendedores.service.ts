import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {
  vendedorSeleccionado: any; // Almacena la categoría seleccionada

  constructor() { }

  setVendedorSeleccionado(vendedor: any) {
    this.vendedorSeleccionado = vendedor;
  }

  getVendedorSeleccionado() {
    return this.vendedorSeleccionado;
  }
}
