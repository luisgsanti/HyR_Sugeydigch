import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAdministradorComponent } from './nav-bar-administrador.component';

describe('NavBarAdministradorComponent', () => {
  let component: NavBarAdministradorComponent;
  let fixture: ComponentFixture<NavBarAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
