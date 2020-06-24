import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaReservaRecepcionistaComponent } from './nueva-reserva-recepcionista.component';

describe('NuevaReservaRecepcionistaComponent', () => {
  let component: NuevaReservaRecepcionistaComponent;
  let fixture: ComponentFixture<NuevaReservaRecepcionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaReservaRecepcionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaReservaRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
