import { Component, OnInit } from '@angular/core';
import { Producto } from '../productos/productos.model';
import { ServiceProductService } from '../productos-service/service-product.service';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent {
  collapsed: boolean = false;
  productoRegistrado = false;
  categorias: any[] = [];
  productoForm: FormGroup;
  categoriaSeleccionadaId: number = 0; // Variable para almacenar el ID de la categoría seleccionada
  private notifier: NotifierService;


  producto: Producto = {
    nombre: '',
    descripcion: '',
    precio_compra: 0,
    precio_venta: 0,
    cantidad_stock: 0,
    cantidad_minima: 0,
    categoriaId: 0,
    status: 'T'
  };

  constructor(private productoService: ServiceProductService, private fb: FormBuilder,private http: HttpClient,notifierService: NotifierService) {
    this.productoForm = new FormGroup({
      'nombre': new FormControl('',[Validators.required, Validators.pattern(/\S/)]),
      'descripcion': new FormControl('', [Validators.required, Validators.pattern(/\S/)]),
      'precio_compra': new FormControl('', [Validators.required, Validators.min(1)]),
      'precio_venta': new FormControl('', [Validators.required, Validators.min(1)]),
      'stock_actual': new FormControl('', [Validators.required, Validators.min(1)]),
      'stock_minimo': new FormControl('', [Validators.required, Validators.min(1)]),
      'categoriaId': new FormControl('', Validators.required)
    })
    this.notifier = notifierService;
  }

   // Método para manejar la selección de la categoría
   onCategoriaSeleccionada(event: Event) {
    const element = event.target as HTMLSelectElement;
    const categoriaNombre = element.value;
    const categoriaEncontrada = this.categorias.find(categoria => categoria.nombre === categoriaNombre);
      if (categoriaEncontrada) {
        this.categoriaSeleccionadaId = categoriaEncontrada.id;
      }
    }


  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this.http.get<any>('http://localhost:9005/sandec/categorias')
      .subscribe(response => {
        if (response.intStatus === 200) {
          this.categorias = response.strAnswer;
        } else {
          // Manejar errores 
        }
      }, error => {
        // Manejar errores de la solicitud HTTP
      });
  }

  guardarProducto() {
    if (this.productoForm.valid) {
      const formData = {
        strNombre: this.productoForm.get('nombre')?.value,
        strDescripcion: this.productoForm.get('descripcion')?.value,
        floatPrecioCompra: this.productoForm.get('precio_compra')?.value,
        floatPrecioVenta: this.productoForm.get('precio_venta')?.value,
        intCantidadStock: this.productoForm.get('stock_actual')?.value,
        intCantidadMinima: this.productoForm.get('stock_minimo')?.value,
        intIdCategoria: this.categoriaSeleccionadaId,
        strImg: 'Vacio',
        strStatus: 'Activo'
      };
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:9005' // Establece el origen del servidor Flask
      });
  
      this.http.post<any>('http://localhost:9005/sandec/nuevoProducto', formData, { headers }).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          this.notifier.notify('success', 'El producto se guardó correctamente.');
          // Realizar otras acciones con la respuesta del servidor si es necesario
        },
        (error) => {
          this.notifier.notify('error', 'Error para guardar producto.');
          console.error('Error al realizar la petición:', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }

  onCollapsedChange(isCollapsed: boolean) {
    this.collapsed = isCollapsed;
  }

  limpiarFormulario() {
    this.productoForm.reset();
  }
}
