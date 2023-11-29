import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { CategoriaService } from '../servicios/categoria.service';



@Component({
  selector: 'app-listado-categoria',
  templateUrl: './listado-categoria.component.html',
  styleUrls: ['./listado-categoria.component.css']
})
export class ListadoCategoriaComponent {
  collapsed: boolean = false;
  categorias: any[] = []; // Aquí almacenaremos las categorias
  private notifier: NotifierService;

  constructor(private http: HttpClient,private router: Router, private categoriaService: CategoriaService,notifierService: NotifierService) { 
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this.http.get<any>('http://localhost:9005/sandec/categorias')
      .subscribe(response => {
        if (response.intStatus === 200) {
          this.categorias = response.strAnswer;
        } else {
          // Manejar errores si es necesario
        }
      }, error => {
        // Manejar errores de la solicitud HTTP
      });
  }


  editarCategoria(categoria: any) {
    this.categoriaService.setCategoriaSeleccionada(categoria); // Almacena la categoría seleccionada en el servicio
    this.router.navigate(['/editar-categoria', categoria.id]); // Navega a la página de edición con el ID
  }

  desactivar(elemento: any) {
      const formData = {
        intIdCategoria: elemento?.id,
        strNombre: elemento?.nombre,
        strDescripcion: elemento?.descripcion,
        strStatus: 'Inactivo'
      };
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:9005' // Establece el origen del servidor Flask
      });
  
      this.http.put<any>('http://localhost:9005/sandec/editarCategoria', formData, { headers }).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          // Realizar otras acciones con la respuesta del servidor si es necesario
          this.notifier.notify('success', 'La categoria se desactivo correctamente.');
        },
        (error) => {
          this.notifier.notify('error', 'Error para desactivar categoria.');
          console.error('Error al realizar la petición:', error);
        }
      );
  }
  // Método para manejar el cambio en collapsed
  onCollapsedChange(isCollapsed: boolean) {
    this.collapsed = isCollapsed;
  }
}
