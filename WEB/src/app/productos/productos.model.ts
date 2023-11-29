export interface Producto {
    nombre: string;
    descripcion: string;
    precio_compra: number;
    precio_venta: number;
    cantidad_stock: number;
    cantidad_minima: number;
    categoriaId: number;
    //imagen: File;
    status: string;
  }
  