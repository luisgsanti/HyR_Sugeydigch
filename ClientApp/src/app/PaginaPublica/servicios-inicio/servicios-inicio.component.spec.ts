import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosInicioComponent } from './servicios-inicio.component';

describe('ServiciosInicioComponent', () => {
  let component: ServiciosInicioComponent;
  let fixture: ComponentFixture<ServiciosInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
