import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionesInicioComponent } from './habitaciones-inicio.component';

describe('HabitacionesInicioComponent', () => {
  let component: HabitacionesInicioComponent;
  let fixture: ComponentFixture<HabitacionesInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionesInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionesInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
