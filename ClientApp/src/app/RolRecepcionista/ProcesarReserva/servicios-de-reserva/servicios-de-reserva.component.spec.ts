import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosDeReservaComponent } from './servicios-de-reserva.component';

describe('ServiciosDeReservaComponent', () => {
  let component: ServiciosDeReservaComponent;
  let fixture: ComponentFixture<ServiciosDeReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosDeReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosDeReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
