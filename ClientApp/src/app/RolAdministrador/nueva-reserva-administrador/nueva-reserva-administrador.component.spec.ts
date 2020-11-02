import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaReservaAdministradorComponent } from './nueva-reserva-administrador.component';

describe('NuevaReservaAdministradorComponent', () => {
  let component: NuevaReservaAdministradorComponent;
  let fixture: ComponentFixture<NuevaReservaAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaReservaAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaReservaAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
