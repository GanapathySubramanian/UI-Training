import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmeticComponent } from './arithmetic.component';

describe('ArithmeticComponent', () => {
  let component: ArithmeticComponent;
  let fixture: ComponentFixture<ArithmeticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArithmeticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArithmeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the sum of two numbers given as the input ',()=>{
    const result=ArithmeticComponent.sum(5,10);
    expect(result).toBe(15);
  })
});
