import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ColorChangeComponent } from './color-change.component';

describe('ColorChangeComponent', () => {
  let component: ColorChangeComponent;
  let fixture: ComponentFixture<ColorChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add green background to div element on click of the green button',()=>{
    const btn=fixture.debugElement.query(By.css('.green-btn'));
    btn.triggerEventHandler('click',null);
    fixture.detectChanges();
    const bg: HTMLElement = fixture.debugElement.query(By.css('.box')).nativeElement;
    expect(bg.style.backgroundColor).toEqual('green')
  })
  
  it('should add red background to div element on click of the red button',()=>{
    const btn=fixture.debugElement.query(By.css('.red-btn'));
    btn.triggerEventHandler('click',null);
    fixture.detectChanges();
    const bg: HTMLElement = fixture.debugElement.query(By.css('.box')).nativeElement;
    expect(bg.style.backgroundColor).toEqual('red')
  })

  
  it('check the div element is not in red, when the isGreenBackground is true',()=>{
    component.isGreenBackground=true;
    fixture.detectChanges();
    const bg: HTMLElement = fixture.debugElement.query(By.css('.box')).nativeElement;
    expect(bg.style.backgroundColor).not.toBe('red');
  })

});
