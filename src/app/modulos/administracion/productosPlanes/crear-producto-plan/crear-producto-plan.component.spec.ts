import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProductoPlanComponent } from './crear-producto-plan.component';

describe('CrearProductoPlanComponent', () => {
  let component: CrearProductoPlanComponent;
  let fixture: ComponentFixture<CrearProductoPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProductoPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearProductoPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
