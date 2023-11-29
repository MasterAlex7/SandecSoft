import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  clienteSeleccionado: any; // Almacena la categoría seleccionada

  constructor() { }

  setClienteSeleccionado(cliente: any) {
    this.clienteSeleccionado = cliente;
  }

  getclienteSeleccionado() {
    return this.clienteSeleccionado;
  }
}
