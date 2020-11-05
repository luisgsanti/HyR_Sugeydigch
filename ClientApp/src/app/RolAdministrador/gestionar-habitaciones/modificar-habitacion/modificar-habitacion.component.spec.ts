import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarHabitacionComponent } from './modificar-habitacion.component';

describe('ModificarHabitacionComponent', () => {
  let component: ModificarHabitacionComponent;
  let fixture: ComponentFixture<ModificarHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
