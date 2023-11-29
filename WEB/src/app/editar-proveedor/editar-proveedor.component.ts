import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedoresService } from '../servicios/proveedores.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent {
  collapsed: boolean = false;
  proveedor: any;
  editarProveedorForm: FormGroup;
  proveedorSeleccionado: number = 0;
  private notifier: NotifierService;

  constructor(private http: HttpClient,private route: ActivatedRoute, private proveedorService: ProveedoresService,private formBuilder: FormBuilder,notifierService: NotifierService) { 
    this.editarProveedorForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern(/\S/)]],
      direccion: ['', [Validators.required, Validators.pattern(/\S/)]],
      telefono: ['', [Validators.pattern('(\\+52|0052|52)?[ -]*([0-9][ -]*){10}'), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.proveedorSeleccionado = id
      // Obtén la categoría seleccionada del servicio
      this.proveedor = this.proveedorService.getProveedorSeleccionado();
    });
  }

  onSubmit() {
    if (this.editarProveedorForm.valid) {
      const formData = {
        intIdProveedor: this.proveedorSeleccionado,
        strNombre: this.editarProveedorForm.get('nombre')?.value,
        strDireccion: this.editarProveedorForm.get('direccion')?.value,
        strTelefono: this.editarProveedorForm.get('telefono')?.value,
        strEmail: this.editarProveedorForm.get('email')?.value,
        strStatus: 'Activo'
      };
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:9005' // Establece el origen del servidor Flask
      });
  
      this.http.put<any>('http://localhost:9005/sandec/editarProveedor', formData, { headers }).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          // Realizar otras acciones con la respuesta del servidor si es necesario
          this.notifier.notify('success', 'El proveedor se edito correctamente.');
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
