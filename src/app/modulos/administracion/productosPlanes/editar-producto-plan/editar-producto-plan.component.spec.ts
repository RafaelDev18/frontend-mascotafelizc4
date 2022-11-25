import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProductoPlanComponent } from './editar-producto-plan.component';

describe('EditarProductoPlanComponent', () => {
  let component: EditarProductoPlanComponent;
  let fixture: ComponentFixture<EditarProductoPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProductoPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProductoPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
