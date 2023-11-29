import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../servicios/categoria.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent {
  collapsed: boolean = false;
  categoria: any;
  editarCategoriaForm: FormGroup;
  categoriaSeleccionada: number = 0;
  private notifier: NotifierService;

  constructor(private http: HttpClient,private route: ActivatedRoute, private categoriaService: CategoriaService,private formBuilder: FormBuilder,notifierService: NotifierService) { 
    this.editarCategoriaForm =  this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern(/\S/)]],
      descripcion: ['', [Validators.required, Validators.pattern(/\S/)]]
    });
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.categoriaSeleccionada=id;
      // Obtén la categoría seleccionada del servicio
      this.categoria = this.categoriaService.getCategoriaSeleccionada();
    });
  }

  onSubmit() {
    if (this.editarCategoriaForm.valid) {
      const formData = {
        intIdCategoria: this.categoriaSeleccionada,
        strNombre: this.editarCategoriaForm.get('nombre')?.value,
        strDescripcion: this.editarCategoriaForm.get('descripcion')?.value,
        strStatus: 'Activo'
      };
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:9005' // Establece el origen del servidor Flask
      });
  
      this.http.put<any>('http://localhost:9005/sandec/editarCategoria', formData, { headers }).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          // Realizar otras acciones con la respuesta del servidor si es necesario
          this.notifier.notify('success', 'La categoria se edito correctamente.');
        },
        (error) => {
          this.notifier.notify('error', 'Error para guardar categoria.');
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
