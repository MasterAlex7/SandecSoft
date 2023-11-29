import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-ventas-crear',
  templateUrl: './ventas-crear.component.html',
  styleUrls: ['./ventas-crear.component.css']
})
export class VentasCrearComponent {
  collapsed: boolean = false;
  productos: any[] = [];
  productoSeleccionado: any;
  resultadosBusqueda: Observable<any[]> = of([]);
  clientes: any[] = [];
  totalVenta: number = 0;
  cantidad:number=0;
  formulario: FormGroup; // Declara una variable para el formulario
  clienteSeleccionadoId: number = 0; // Variable para almacenar el ID de la categoría seleccionada
  productoControl = new FormControl();
  private notifier: NotifierService;

  producto = {
    floatTotalVent : 0.0,
    strStatus : 'Activo',
    arrayProductos : [] as any[],
  };

  constructor(private formBuilder: FormBuilder,private http: HttpClient,notifierService: NotifierService) {
    this.formulario = this.formBuilder.group({
      producto: this.productoControl, // Agrega aquí los campos de tu formulario
      cantidad: [''],
      precio: ['']
    });
    this.productoSeleccionado = {};
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.obtenerClientes();
    this.obtenerProductos();
    this.resultadosBusqueda = this.productoControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  obtenerClientes() {
    this.http.get<any>('http://localhost:9005/sandec/clientes')
      .subscribe(response => {
        if (response.intStatus === 200) {
          this.clientes = response.strAnswer;
          console.log(this.clientes);
        } else {
          // Manejar errores si es necesario
        }
      }, error => {
        // Manejar errores de la solicitud HTTP
      });
  }

  obtenerProductos() {
    this.http.get<any>('http://localhost:9005/sandec/productos')
    .subscribe(response => {
      if (response.intStatus === 200) {
        this.productos = response.strAnswer;
      } else {
        // Manejar errores si es necesario
      }
    }, error => {
      // Manejar errores de la solicitud HTTP
    });
  }

  // Método para manejar la selección de la categoría
  onClienteSeleccionado(event: Event) {
    const element = event.target as HTMLSelectElement;
    const clientesSelc = element.value;
    console.log('nombreNegocio seleccionado:', clientesSelc); // Agrega esta línea
    const clienteEncontrado = this.clientes.find(clientes => clientes.nombre === clientesSelc);
    console.log('vendedorEncontrado:', clienteEncontrado); // Agrega esta línea
    if (clienteEncontrado) {
      this.clienteSeleccionadoId = clienteEncontrado.id;
      console.log('clienteSeleccionadoId:', this.clienteSeleccionadoId); // Agrega esta línea
    }
  }
  
  

  onProductoSeleccionado(event: any) {
    const productoNombre = event.option.value;
    this.productoSeleccionado = this.productos.find(producto => producto.nombre === productoNombre);
  }
  

  _filter(value: string): any[] {
    if (!value) {
      return [];
    }
  
    const filterValue = value.toLowerCase();
    const resultados = this.productos.filter(producto => producto.nombre.toLowerCase().includes(filterValue));
    if (resultados.length > 0) {
      this.productoSeleccionado = resultados[0];
    }
    return resultados;
  }

  getNombreProducto(id: number): string {
    const producto = this.productos.find(producto => producto.id === id);
    return producto ? producto.nombre : '';
  }


  guardarProducto() {
    const productoId = this.productoSeleccionado.id;
    const precio = Number(this.productoSeleccionado.precio_venta);
    var subtotal = this.cantidad * precio;

    this.producto.arrayProductos.push({
      intIdVendedor: this.clienteSeleccionadoId,
      idProducto: productoId,
      cantidad: this.cantidad,
      precioUnitario: precio
    });


    this.totalVenta += subtotal;
    this.producto.floatTotalVent += subtotal;
  
    this.formulario.reset();
    console.log(this.producto);
  }


  guardarVenta(){
    const formData = {
      intIdCliente: this.clienteSeleccionadoId,
      floatTotalVenta: this.totalVenta,
      strStatus: 'Activo',
      arrayProductos: this.producto.arrayProductos
    };
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:9005' // Establece el origen del servidor Flask
    });
  
    this.http.post<any>('http://localhost:9005/sandec/nuevaVenta', formData, { headers }).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        // Realizar otras acciones con la respuesta del servidor si es necesario
  
        // Muestra un mensaje al usuario de registro correcto
        this.notifier.notify('success', 'La venta se guardó correctamente.');
  
        // Limpia los datos de la venta
        this.producto.arrayProductos = [];
        this.totalVenta = 0;
        this.producto.floatTotalVent = 0;
      },
      (error) => {
        this.notifier.notify('success', 'La venta tuvo un error.');
        console.error('Error al realizar la venta:', error);
      }
    );
  }
  
  
  // Método para manejar el cambio en collapsed
  onCollapsedChange(isCollapsed: boolean) {
    this.collapsed = isCollapsed;
  }
}
