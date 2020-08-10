import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoClienteRecepcionistaComponent } from './nuevo-cliente-recepcionista.component';

describe('NuevoClienteRecepcionistaComponent', () => {
  let component: NuevoClienteRecepcionistaComponent;
  let fixture: ComponentFixture<NuevoClienteRecepcionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoClienteRecepcionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoClienteRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
