import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalCalculator } from './decimal-calculator.component';

describe('TecladoComponent', () => {
  let component: DecimalCalculator;
  let fixture: ComponentFixture<DecimalCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecimalCalculator ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimalCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
