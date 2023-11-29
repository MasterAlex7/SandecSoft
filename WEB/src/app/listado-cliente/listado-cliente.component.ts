import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-listado-cliente',
  templateUrl: './listado-cliente.component.html',
  styleUrls: ['./listado-cliente.component.css']
})
export class ListadoClienteComponent {
  collapsed: boolean = false;
  clientes: any[] = []; // Aquí almacenaremos los clientes
  private notifier: NotifierService;

  constructor(private http: HttpClient,private router: Router, private clienteService: ClientesService,notifierService: NotifierService) { 
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.http.get<any>('http://localhost:9005/sandec/clientes')
      .subscribe(response => {
        if (response.intStatus === 200) {
          this.clientes = response.strAnswer;
        } else {
          // Manejar errores si es necesario
        }
      }, error => {
        // Manejar errores de la solicitud HTTP
      });
  }

  editarCliente(cliente: any) {
    this.clienteService.setClienteSeleccionado(cliente); // Almacena la categoría seleccionada en el servicio
    this.router.navigate(['/editar-cliente', cliente.id]); // Navega a la página de edición con el ID
  }

  desactivar(elemento: any) {
    const formData = {
      intIdCliente: elemento?.id,
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

    this.http.put<any>('http://localhost:9005/sandec/editarCliente', formData, { headers }).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        // Realizar otras acciones con la respuesta del servidor si es necesario
        this.notifier.notify('success', 'El cliente se desactivo correctamente.');
      },
      (error) => {
        this.notifier.notify('error', 'Error para desactivar cliente.');
        console.error('Error al realizar la petición:', error);
      }
    );
}


  // Método para manejar el cambio en collapsed
  onCollapsedChange(isCollapsed: boolean) {
    this.collapsed = isCollapsed;
  }
}
