import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSolicitudAfiComponent } from './eliminar-solicitud-afi.component';

describe('EliminarSolicitudAfiComponent', () => {
  let component: EliminarSolicitudAfiComponent;
  let fixture: ComponentFixture<EliminarSolicitudAfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarSolicitudAfiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarSolicitudAfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
