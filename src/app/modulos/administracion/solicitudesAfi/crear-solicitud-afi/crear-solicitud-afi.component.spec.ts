import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSolicitudAfiComponent } from './crear-solicitud-afi.component';

describe('CrearSolicitudAfiComponent', () => {
  let component: CrearSolicitudAfiComponent;
  let fixture: ComponentFixture<CrearSolicitudAfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSolicitudAfiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearSolicitudAfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
