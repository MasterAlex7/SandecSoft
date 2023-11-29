import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  proveedorSeleccionado: any; // Almacena la categoría seleccionada

  constructor() { }

  setProveedorSeleccionado(proveedor: any) {
    this.proveedorSeleccionado = proveedor;
  }

  getProveedorSeleccionado() {
    return this.proveedorSeleccionado;
  }
}
