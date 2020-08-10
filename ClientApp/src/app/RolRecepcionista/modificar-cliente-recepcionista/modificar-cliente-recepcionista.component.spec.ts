import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarClienteRecepcionistaComponent } from './modificar-cliente-recepcionista.component';

describe('ModificarClienteRecepcionistaComponent', () => {
  let component: ModificarClienteRecepcionistaComponent;
  let fixture: ComponentFixture<ModificarClienteRecepcionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarClienteRecepcionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarClienteRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
