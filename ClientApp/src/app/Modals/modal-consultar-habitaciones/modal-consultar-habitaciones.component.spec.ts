import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConsultarHabitacionesComponent } from './modal-consultar-habitaciones.component';

describe('ModalConsultarHabitacionesComponent', () => {
  let component: ModalConsultarHabitacionesComponent;
  let fixture: ComponentFixture<ModalConsultarHabitacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConsultarHabitacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConsultarHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
