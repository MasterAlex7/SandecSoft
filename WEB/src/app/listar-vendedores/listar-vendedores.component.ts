import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { VendedoresService } from '../servicios/vendedores.service';
@Component({
  selector: 'app-listar-vendedores',
  templateUrl: './listar-vendedores.component.html',
  styleUrls: ['./listar-vendedores.component.css']
})
export class ListarVendedoresComponent {
  collapsed: boolean = false;
  vendedores: any[] = [];
  private notifier: NotifierService;

  constructor(private http: HttpClient,private router: Router, private vendedorService: VendedoresService,notifierService: NotifierService) {
    this.notifier = notifierService;
   }

  ngOnInit(): void {
    this.obtenerVendedores();
  }

  obtenerVendedores() {
    this.http.get<any>('http://localhost:9005/sandec/vendedores').subscribe(
      (response: any) => {
        if (response.intStatus === 200) {
          this.vendedores = response.strAnswer;
        } else {
          // Manejar otros códigos de estado si es necesario
        }
      },
      (error: any) => {
        // Manejar errores de la solicitud HTTP
      }
    );
  }

  desactivar(elemento: any) {
    const formData = {
      intIdVendedor:elemento?.id,
      strNombreLocatario: elemento?.nombreVendedor,
      strNombreNegocio: elemento?.nombreNegocio,
      strTelefono: elemento?.telefonoContacto,
      strStatus: 'Inactivo'
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:9005' // Establece el origen del servidor Flask
    });

    this.http.put<any>('http://localhost:9005/sandec/editarVendedor', formData, { headers }).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        // Realizar otras acciones con la respuesta del servidor si es necesario
        this.notifier.notify('success', 'El vendedor se desactivo correctamente.');
      },
      (error) => {
        this.notifier.notify('error', 'Error para desactivar vendedor.');
        console.error('Error al realizar la petición:', error);
      }
    );
  }

  editarVendedor(vendedor: any) {
    this.vendedorService.setVendedorSeleccionado(vendedor); // Almacena la categoría seleccionada en el servicio
    this.router.navigate(['/editar-vendedor', vendedor.id]); // Navega a la página de edición con el ID
  }
    // Método para manejar el cambio en collapsed
    onCollapsedChange(isCollapsed: boolean) {
      this.collapsed = isCollapsed;
    }
}
