import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarClienteComponent } from './nav-bar-cliente.component';

describe('NavBarClienteComponent', () => {
  let component: NavBarClienteComponent;
  let fixture: ComponentFixture<NavBarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
