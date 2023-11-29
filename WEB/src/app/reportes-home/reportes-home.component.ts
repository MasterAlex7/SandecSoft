import { Component } from '@angular/core';

@Component({
  selector: 'app-reportes-home',
  templateUrl: './reportes-home.component.html',
  styleUrls: ['./reportes-home.component.css']
})
export class ReportesHomeComponent {
  collapsed: boolean = false;

  // Método para manejar el cambio en collapsed
  onCollapsedChange(isCollapsed: boolean) {
    this.collapsed = isCollapsed;
  }


}
