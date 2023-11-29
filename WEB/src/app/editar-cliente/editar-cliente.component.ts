import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../servicios/clientes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {
  collapsed: boolean = false;
  cliente: any;
  editarClienteForm: FormGroup;
  clienteSeleccionado: number = 0;
  private notifier: NotifierService;

  constructor(private http: HttpClient,private route: ActivatedRoute, private clienteService: ClientesService,private formBuilder: FormBuilder,notifierService: NotifierService) { 
    this.editarClienteForm = this.formBuilder.group({
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
      this.clienteSeleccionado=id;
      // Obtén la categoría seleccionada del servicio
      this.cliente = this.clienteService.getclienteSeleccionado();
    });
  }

  onSubmit() {
    if (this.editarClienteForm.valid) {
      const formData = {
        intIdCliente: this.clienteSeleccionado,
        strNombre: this.editarClienteForm.get('nombre')?.value,
        strDireccion: this.editarClienteForm.get('direccion')?.value,
        strTelefono: this.editarClienteForm.get('telefono')?.value,
        strEmail: this.editarClienteForm.get('email')?.value,
        strStatus: 'Activo'
      };
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:9005' // Establece el origen del servidor Flask
      });
  
      this.http.put<any>('http://localhost:9005/sandec/editarCliente', formData, { headers }).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          // Realizar otras acciones con la respuesta del servidor si es necesario
          this.notifier.notify('success', 'El cliente se edito correctamente.');
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
}
