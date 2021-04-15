import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryCalculatorComponent } from './binary-calculator.component';

describe('BinaryCalculatorComponent', () => {
  let component: BinaryCalculatorComponent;
  let fixture: ComponentFixture<BinaryCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinaryCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
