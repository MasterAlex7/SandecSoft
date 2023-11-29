import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-registrar-vendedor',
  templateUrl: './registrar-vendedor.component.html',
  styleUrls: ['./registrar-vendedor.component.css']
})
export class RegistrarVendedorComponent {
  collapsed: boolean = false;
  vendedorForm: FormGroup;
  private notifier: NotifierService;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,notifierService: NotifierService) {
    this.vendedorForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern(/\S/)]],
      negocio: ['', [Validators.required, Validators.pattern(/\S/)]],
      telefono: ['', [Validators.pattern('(\\+52|0052|52)?[ -]*([0-9][ -]*){10}'), Validators.required]]
    });
    this.notifier = notifierService;
  }

  onSubmit() {
    if (this.vendedorForm.valid) {
      const formData = {
        strNombreLocatario: this.vendedorForm.get('nombre')?.value,
        strNombreNegocio: this.vendedorForm.get('negocio')?.value,
        strTelefono: this.vendedorForm.get('telefono')?.value,
        strStatus: 'Activo'
      };
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:9005' // Establece el origen del servidor Flask
      });
  
      this.http.post<any>('http://localhost:9005/sandec/nuevoLocatario', formData, { headers }).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          // Realizar otras acciones con la respuesta del servidor si es necesario
          this.notifier.notify('success', 'El vendedor se guardó correctamente.');
        },
        (error) => {
          this.notifier.notify('error', 'Error para guardar vendedor.');
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
