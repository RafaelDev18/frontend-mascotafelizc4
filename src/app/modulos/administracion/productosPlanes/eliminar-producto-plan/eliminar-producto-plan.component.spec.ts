import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProductoPlanComponent } from './eliminar-producto-plan.component';

describe('EliminarProductoPlanComponent', () => {
  let component: EliminarProductoPlanComponent;
  let fixture: ComponentFixture<EliminarProductoPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProductoPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarProductoPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
