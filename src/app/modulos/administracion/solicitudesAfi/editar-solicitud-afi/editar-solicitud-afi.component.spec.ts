import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSolicitudAfiComponent } from './editar-solicitud-afi.component';

describe('EditarSolicitudAfiComponent', () => {
  let component: EditarSolicitudAfiComponent;
  let fixture: ComponentFixture<EditarSolicitudAfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSolicitudAfiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarSolicitudAfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
