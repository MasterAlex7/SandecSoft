import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  prestamoSeleccionado: any; // Almacena la categoría seleccionada

  constructor() { }

  setPrestamoSeleccionado(prestamo: any) {
    this.prestamoSeleccionado = prestamo;
  }

  getclienteSeleccionado() {
    return this.prestamoSeleccionado;
  }
}
