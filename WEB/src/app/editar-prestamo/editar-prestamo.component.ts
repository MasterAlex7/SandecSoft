import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-prestamo',
  templateUrl: './editar-prestamo.component.html',
  styleUrls: ['./editar-prestamo.component.css']
})
export class EditarPrestamoComponent {
  collapsed: boolean = false;

  // Método para manejar el cambio en collapsed
  onCollapsedChange(isCollapsed: boolean) {
    this.collapsed = isCollapsed;
  }
}
