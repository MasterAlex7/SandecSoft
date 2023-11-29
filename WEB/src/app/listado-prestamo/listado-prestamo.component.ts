import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PrestamoService } from '../servicios/prestamo.service';

@Component({
  selector: 'app-listado-prestamo',
  templateUrl: './listado-prestamo.component.html',
  styleUrls: ['./listado-prestamo.component.css']
})
export class ListadoPrestamoComponent {
  collapsed: boolean = false;
  prestamos: any[] = []; 

  constructor(private http: HttpClient,private router: Router,private prestamosService: PrestamoService) { }


  ngOnInit(): void {
    this.obtenerPrestamos();
  }

  obtenerPrestamos() {
    this.http.get<any>('http://localhost:9005/sandec/prestamos')
      .subscribe(response => {
        if (response.intStatus === 200) {
          this.prestamos = response.strAnswer;
        } else {
          // Manejar errores si es necesario
        }
      }, error => {
        // Manejar errores de la solicitud HTTP
      });

    console.log(this.prestamos);
  }

  editarPrestamo(proveedor: any) {
    this.prestamosService.setPrestamoSeleccionado(proveedor); // Almacena la categoría seleccionada en el servicio
    this.router.navigate(['/editar-prestamo', proveedor.id]); // Navega a la página de edición con el ID
  }

  // Método para manejar el cambio en collapsed
  onCollapsedChange(isCollapsed: boolean) {
    this.collapsed = isCollapsed;
  }
}
