import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesRecepcionistaComponent } from './clientes-recepcionista.component';

describe('ClientesRecepcionistaComponent', () => {
  let component: ClientesRecepcionistaComponent;
  let fixture: ComponentFixture<ClientesRecepcionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesRecepcionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
