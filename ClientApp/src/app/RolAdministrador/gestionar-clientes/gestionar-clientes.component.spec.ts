import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarClientesComponent } from './gestionar-clientes.component';

describe('GestionarClientesComponent', () => {
  let component: GestionarClientesComponent;
  let fixture: ComponentFixture<GestionarClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
