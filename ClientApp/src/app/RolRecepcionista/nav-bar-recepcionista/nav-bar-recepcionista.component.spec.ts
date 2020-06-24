import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarRecepcionistaComponent } from './nav-bar-recepcionista.component';

describe('NavBarRecepcionistaComponent', () => {
  let component: NavBarRecepcionistaComponent;
  let fixture: ComponentFixture<NavBarRecepcionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarRecepcionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
