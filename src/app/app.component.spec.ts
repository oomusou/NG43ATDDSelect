import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let target: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    target = new AppComponent();
    fixture.detectChanges();
  });

  describe(`ATDDSelect`, () => {
    describe(`Integration Test`, () => {
      it(`should use 'onChange()' on 'change' event in HTML`, () => {
        spyOn(component, 'onChange');

        debugElement.query(By.css('#TDDSelect')).triggerEventHandler('change', null);
        expect(component.onChange).toHaveBeenCalled();
      });

      it(`should use 'selectedId' in HTML`, () => {
        component.selectedId = '0';

        htmlElement = debugElement.query(By.css('p')).nativeElement;
        expect(htmlElement.textContent).toBe('0');
      });
    });

    describe(`Unit Test`, () => {
      it(`should have 'onChange()' to make 'selectedId' as selected value in Class`, () => {
        const element = <HTMLSelectElement>{
          'value': '1'
        };

        target.onChange(element);
        expect(target.selectedId).toBe('1');
      });
    });
  });
});
