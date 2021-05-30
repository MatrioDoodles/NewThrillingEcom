import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage1Component } from './landingpage1.component';

describe('Landingpage1Component', () => {
  let component: Landingpage1Component;
  let fixture: ComponentFixture<Landingpage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Landingpage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Landingpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
