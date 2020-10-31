import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaReservaClienteComponent } from './nueva-reserva-cliente.component';

describe('NuevaReservaClienteComponent', () => {
  let component: NuevaReservaClienteComponent;
  let fixture: ComponentFixture<NuevaReservaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaReservaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaReservaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
