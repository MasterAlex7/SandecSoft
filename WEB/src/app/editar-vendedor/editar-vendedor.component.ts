import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendedoresService } from '../servicios/vendedores.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-editar-vendedor',
  templateUrl: './editar-vendedor.component.html',
  styleUrls: ['./editar-vendedor.component.css']
})
export class EditarVendedorComponent {
  collapsed: boolean = false;
  vendedor: any;
  editarVendedorForm: FormGroup;
  vendedorSeleccionado: number = 0;
  private notifier: NotifierService;

  constructor(private http: HttpClient,private route: ActivatedRoute, private vendedorService: VendedoresService,private formBuilder: FormBuilder,notifierService: NotifierService) { 
    this.editarVendedorForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern(/\S/)]],
      negocio: ['', [Validators.required, Validators.pattern(/\S/)]],
      telefono: ['', [Validators.pattern('(\\+52|0052|52)?[ -]*([0-9][ -]*){10}'), Validators.required]]
    });
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.vendedorSeleccionado = id;
      // Obtén la categoría seleccionada del servicio
      this.vendedor = this.vendedorService.getVendedorSeleccionado();
    });
  }

  onSubmit() {
    if (this.editarVendedorForm.valid) {
      const formData = {
        intIdVendedor:this.vendedorSeleccionado,
        strNombre: this.editarVendedorForm.get('nombre')?.value,
        strNombreNegocio: this.editarVendedorForm.get('negocio')?.value,
        strTelefono: this.editarVendedorForm.get('telefono')?.value,
        strStatus: 'Activo'
      };
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:9005' // Establece el origen del servidor Flask
      });
  
      this.http.put<any>('http://localhost:9005/sandec/editarVendedor', formData, { headers }).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          // Realizar otras acciones con la respuesta del servidor si es necesario
          this.notifier.notify('success', 'El vendedor se edito correctamente.');
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
