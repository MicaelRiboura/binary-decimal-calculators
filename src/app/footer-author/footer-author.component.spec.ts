import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAuthorComponent } from './footer-author.component';

describe('FooterAuthorComponent', () => {
  let component: FooterAuthorComponent;
  let fixture: ComponentFixture<FooterAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
