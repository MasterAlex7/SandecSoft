import { Component, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isDrawerOpen = true;
  isDrawerCompressed = false;
  constructor(private cdr: ChangeDetectorRef) {}

  onToggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  toggleCompression() {
    this.isDrawerCompressed = !this.isDrawerCompressed;
    this.cdr.detectChanges();
  }
}
