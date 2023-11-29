import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-registrar-categoria',
  templateUrl: './registrar-categoria.component.html',
  styleUrls: ['./registrar-categoria.component.css']
})
export class RegistrarCategoriaComponent {
  collapsed: boolean = false;
  categoriaForm: FormGroup;
  private notifier: NotifierService;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,notifierService: NotifierService) {
    this.categoriaForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern(/\S/)]],
      descripcion: ['', [Validators.required, Validators.pattern(/\S/)]]
    });
    this.notifier = notifierService;
  }

  onSubmit() {
    if (this.categoriaForm.valid) {
      const formData = {
        strNombre: this.categoriaForm.get('nombre')?.value,
        strDescripcion: this.categoriaForm.get('descripcion')?.value,
        strStatus: 'Activo'
      };
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:9005' // Establece el origen del servidor Flask
      });
  
      this.http.post<any>('http://localhost:9005/sandec/nuevaCategoria', formData, { headers }).subscribe(
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
