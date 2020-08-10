import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionesRecepcionistaComponent } from './habitaciones-recepcionista.component';

describe('HabitacionesRecepcionistaComponent', () => {
  let component: HabitacionesRecepcionistaComponent;
  let fixture: ComponentFixture<HabitacionesRecepcionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionesRecepcionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionesRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
