import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConsultarReservasComponent } from './modal-consultar-reservas.component';

describe('ModalConsultarReservasComponent', () => {
  let component: ModalConsultarReservasComponent;
  let fixture: ComponentFixture<ModalConsultarReservasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConsultarReservasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConsultarReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
