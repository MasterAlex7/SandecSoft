import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productoSeleccionado: any; // Almacena la categoría seleccionada

  constructor() { }

  setProductoSeleccionado(producto: any) {
    this.productoSeleccionado = producto;
  }

  getproductoSeleccionado() {
    return this.productoSeleccionado;
  }
}
