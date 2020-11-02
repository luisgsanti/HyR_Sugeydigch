import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarReservasAdministradorComponent } from './consultar-reservas-administrador.component';

describe('ConsultarReservasAdministradorComponent', () => {
  let component: ConsultarReservasAdministradorComponent;
  let fixture: ComponentFixture<ConsultarReservasAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarReservasAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarReservasAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
