import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearReporteComprasComponent } from './crear-reporte-compras.component';

describe('CrearReporteComprasComponent', () => {
  let component: CrearReporteComprasComponent;
  let fixture: ComponentFixture<CrearReporteComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearReporteComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearReporteComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
