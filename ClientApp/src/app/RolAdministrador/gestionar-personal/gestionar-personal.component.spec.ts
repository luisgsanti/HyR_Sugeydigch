import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarPersonalComponent } from './gestionar-personal.component';

describe('GestionarPersonalComponent', () => {
  let component: GestionarPersonalComponent;
  let fixture: ComponentFixture<GestionarPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
