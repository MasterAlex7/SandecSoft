import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearReporteProductosComponent } from './crear-reporte-productos.component';

describe('CrearReporteProductosComponent', () => {
  let component: CrearReporteProductosComponent;
  let fixture: ComponentFixture<CrearReporteProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearReporteProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearReporteProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
