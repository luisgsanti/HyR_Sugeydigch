import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactenosInicioComponent } from './contactenos-inicio.component';

describe('ContactenosInicioComponent', () => {
  let component: ContactenosInicioComponent;
  let fixture: ComponentFixture<ContactenosInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactenosInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactenosInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
