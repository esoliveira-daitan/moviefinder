import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightGreenButtonComponent } from './light-green-button.component';

describe('LightGreenButtonComponent', () => {
  let component: LightGreenButtonComponent;
  let fixture: ComponentFixture<LightGreenButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightGreenButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightGreenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
