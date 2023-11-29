import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearReporteVentaComponent } from './crear-reporte-venta.component';

describe('CrearReporteVentaComponent', () => {
  let component: CrearReporteVentaComponent;
  let fixture: ComponentFixture<CrearReporteVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearReporteVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearReporteVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
