import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent {
  collapsed: boolean = false;
  clientForm: FormGroup;
  private notifier: NotifierService;
  


  constructor(private formBuilder: FormBuilder, private http: HttpClient,notifierService: NotifierService) {
    this.clientForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern(/\S/)]],
      direccion: ['', [Validators.required, Validators.pattern(/\S/)]],
      telefono: ['', [Validators.pattern('(\\+52|0052|52)?[ -]*([0-9][ -]*){10}'), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
    this.notifier = notifierService;
  }

  onSubmit() {
    if (this.clientForm.valid) {
      const formData = {
        strNombre: this.clientForm.get('nombre')?.value,
        strDireccion: this.clientForm.get('direccion')?.value,
        strTelefono: this.clientForm.get('telefono')?.value,
        strEmail: this.clientForm.get('email')?.value,
        strStatus: 'Activo'
      };
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:9005' // Establece el origen del servidor Flask
      });
  
      this.http.post<any>('http://localhost:9005/sandec/nuevoCliente', formData, { headers }).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          this.notifier.notify('success', 'El cliente se guardó correctamente.');
          // Realizar otras acciones con la respuesta del servidor si es necesario
        },
        (error) => {
          this.notifier.notify('error', 'Error para guardar cliente.');
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
