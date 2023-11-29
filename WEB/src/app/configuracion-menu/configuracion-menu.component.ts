import { Component } from '@angular/core';
import menuItems from './menu.json';

interface Opcion {
  texto: string;
  ruta: string;
}

interface Menu {
  titulo: string;
  opciones: Opcion[];
}

@Component({
  selector: 'app-configuracion-menu',
  templateUrl: './configuracion-menu.component.html',
  styleUrls: ['./configuracion-menu.component.css']
})
export class ConfiguracionMenuComponent {
  menu = menuItems;
  collapsed: boolean = false;

  // Método para manejar el cambio en collapsed
  onCollapsedChange(isCollapsed: boolean) {
    this.collapsed = isCollapsed;
  }


}
