import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaDeReservaComponent } from './factura-de-reserva.component';

describe('FacturaDeReservaComponent', () => {
  let component: FacturaDeReservaComponent;
  let fixture: ComponentFixture<FacturaDeReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaDeReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaDeReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
