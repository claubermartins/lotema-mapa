import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAreComponent } from './footer-are.component';

describe('FooterAreComponent', () => {
  let component: FooterAreComponent;
  let fixture: ComponentFixture<FooterAreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
