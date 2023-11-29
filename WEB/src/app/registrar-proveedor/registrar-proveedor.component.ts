import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-registrar-proveedor',
  templateUrl: './registrar-proveedor.component.html',
  styleUrls: ['./registrar-proveedor.component.css']
})
export class RegistrarProveedorComponent {
  collapsed: boolean = false;
  proveedorForm: FormGroup;
  private notifier: NotifierService;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,notifierService: NotifierService) {
    this.proveedorForm = this.formBuilder.group({
      nombre: ['',[Validators.required, Validators.pattern(/\S/)]],
      direccion: ['', [Validators.required, Validators.pattern(/\S/)]],
      telefono: ['', [Validators.pattern('(\\+52|0052|52)?[ -]*([0-9][ -]*){10}'), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
    this.notifier = notifierService;
  }

  onSubmit() {
    if (this.proveedorForm.valid) {
      const formData = {
        strNombre: this.proveedorForm.get('nombre')?.value,
        strDireccion: this.proveedorForm.get('direccion')?.value,
        strTelefono: this.proveedorForm.get('telefono')?.value,
        strEmail: this.proveedorForm.get('email')?.value,
        strStatus: 'Activo'
      };
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:9005' // Establece el origen del servidor Flask
      });
  
      this.http.post<any>('http://localhost:9005/sandec/nuevoProveedor', formData, { headers }).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          // Realizar otras acciones con la respuesta del servidor si es necesario
          this.notifier.notify('success', 'El proveedor se guardó correctamente.');
        },
        (error) => {
          this.notifier.notify('error', 'Error para guardar proveedor.');
          console.error('Error al realizar la petición:', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
  // Método para manejar el cambio en collapsed
  onCollapsedChange(isCollapsed: boolean) {
    this.collapsed = isCollapsed;
  }
}
