import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { ProveedoresService } from '../servicios/proveedores.service'

@Component({
  selector: 'app-listado-proveedor',
  templateUrl: './listado-proveedor.component.html',
  styleUrls: ['./listado-proveedor.component.css']
})
export class ListadoProveedorComponent {
  collapsed: boolean = false;
  proveedores: any[] = []; // Aquí almacenaremos los proveedores obtenidos
  private notifier: NotifierService;

  constructor(private http: HttpClient,private router: Router,private proveedorService: ProveedoresService,notifierService: NotifierService) {
    this.notifier = notifierService;
   }

  ngOnInit(): void {
    this.obtenerProveedores();
  }

  obtenerProveedores() {
    this.http.get<any>('http://localhost:9005/sandec/proveedores')
      .subscribe(response => {
        if (response.intStatus === 200) {
          this.proveedores = response.strAnswer;
        } else {
          // Manejar errores si es necesario
        }
      }, error => {
        // Manejar errores de la solicitud HTTP
      });
  }

  editarProveedor(proveedor: any) {
    this.proveedorService.setProveedorSeleccionado(proveedor); // Almacena la categoría seleccionada en el servicio
    this.router.navigate(['/editar-proveedor', proveedor.id]); // Navega a la página de edición con el ID
  }

  desactivar(elemento: any) {
    const formData = {
      intIdProveedor: elemento?.id,
      strNombre: elemento?.nombre,
      strDireccion: elemento?.direccion,
      strTelefono: elemento?.telefono,
      strEmail: elemento?.email,
      strStatus: 'Inactivo'
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:9005' // Establece el origen del servidor Flask
    });

    this.http.put<any>('http://localhost:9005/sandec/editarProveedor', formData, { headers }).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        // Realizar otras acciones con la respuesta del servidor si es necesario
        this.notifier.notify('success', 'El proveedor se desactivo correctamente.');
      },
      (error) => {
        this.notifier.notify('error', 'Error para desactivar proveedor.');
        console.error('Error al realizar la petición:', error);
      }
    );
  }
  // Método para manejar el cambio en collapsed
  onCollapsedChange(isCollapsed: boolean) {
    this.collapsed = isCollapsed;
  }
}
