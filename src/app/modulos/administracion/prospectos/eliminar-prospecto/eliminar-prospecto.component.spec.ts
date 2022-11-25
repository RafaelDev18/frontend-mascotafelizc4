import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProspectoComponent } from './eliminar-prospecto.component';

describe('EliminarProspectoComponent', () => {
  let component: EliminarProspectoComponent;
  let fixture: ComponentFixture<EliminarProspectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProspectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarProspectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
