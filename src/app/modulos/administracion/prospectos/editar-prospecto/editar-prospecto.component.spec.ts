import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProspectoComponent } from './editar-prospecto.component';

describe('EditarProspectoComponent', () => {
  let component: EditarProspectoComponent;
  let fixture: ComponentFixture<EditarProspectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProspectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProspectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
