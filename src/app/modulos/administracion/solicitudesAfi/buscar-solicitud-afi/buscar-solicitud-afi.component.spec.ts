import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarSolicitudAfiComponent } from './buscar-solicitud-afi.component';

describe('BuscarSolicitudAfiComponent', () => {
  let component: BuscarSolicitudAfiComponent;
  let fixture: ComponentFixture<BuscarSolicitudAfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarSolicitudAfiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarSolicitudAfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
