import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCalculatorComponent } from './nav-calculator.component';

describe('NavCalculatorComponent', () => {
  let component: NavCalculatorComponent;
  let fixture: ComponentFixture<NavCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
