import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ComprasService } from '../servicios/compras.service';

@Component({
  selector: 'app-listado-compras',
  templateUrl: './listado-compras.component.html',
  styleUrls: ['./listado-compras.component.css']
})
export class ListadoComprasComponent {
  collapsed: boolean = false;
  compras: any[] = []; // Aquí almacenaremos los productos obtenidos

  constructor(private http: HttpClient,private router: Router,private comprasService: ComprasService) { }

  ngOnInit(): void {
    this.obtenerProveedores();
  }

  obtenerProveedores() {
    this.http.get<any>('http://localhost:9005/sandec/compras')
      .subscribe(response => {
        if (response.intStatus === 200) {
          this.compras = response.strAnswer;
          console.log(this.compras);
        } else {
          // Manejar errores si es necesario
        }
      }, error => {
        // Manejar errores de la solicitud HTTP
      });
  }

  visualizarCompra(compra: any) {
    this.comprasService.setCompraSeleccionada(compra); // Almacena la categoría seleccionada en el servicio
    this.router.navigate(['/visualizar-compra', compra.idCompra]); // Navega a la página de edición con el ID
  }
  // Método para manejar el cambio en collapsed
  onCollapsedChange(isCollapsed: boolean) {
    this.collapsed = isCollapsed;
  }
}
