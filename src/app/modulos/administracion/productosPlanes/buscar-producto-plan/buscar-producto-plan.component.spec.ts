import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProductoPlanComponent } from './buscar-producto-plan.component';

describe('BuscarProductoPlanComponent', () => {
  let component: BuscarProductoPlanComponent;
  let fixture: ComponentFixture<BuscarProductoPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarProductoPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarProductoPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
