import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProspectoComponent } from './buscar-prospecto.component';

describe('BuscarProspectoComponent', () => {
  let component: BuscarProspectoComponent;
  let fixture: ComponentFixture<BuscarProspectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarProspectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarProspectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
