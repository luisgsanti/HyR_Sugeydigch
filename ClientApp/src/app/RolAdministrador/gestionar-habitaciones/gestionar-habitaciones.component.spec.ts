import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarHabitacionesComponent } from './gestionar-habitaciones.component';

describe('GestionarHabitacionesComponent', () => {
  let component: GestionarHabitacionesComponent;
  let fixture: ComponentFixture<GestionarHabitacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarHabitacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
