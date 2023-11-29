import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  categoriaSeleccionada: any; // Almacena la categoría seleccionada

  constructor() { }

  setCategoriaSeleccionada(categoria: any) {
    this.categoriaSeleccionada = categoria;
  }

  getCategoriaSeleccionada() {
    return this.categoriaSeleccionada;
  }
}
