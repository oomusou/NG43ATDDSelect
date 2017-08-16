import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
      ],
      imports: [
        FormsModule
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    target = new AppComponent();
    fixture.detectChanges();
  });

  describe(`ATDDSelect`, () => {
    describe(`Integration Test`, () => {
      it(`should have 'selectedId' field on 'ngModel' directive`, () => {
        htmlElement = debugElement.query(By.css('#TDDSelect')).nativeElement;
        (<HTMLSelectElement>htmlElement).value = '2';
        htmlElement.dispatchEvent(new Event('change'));

        expect(component.selectedId).toBe('2');
      });

      it(`should use 'selectedId' field`, () => {
        component.selectedId = '1';
        fixture.detectChanges();

        htmlElement = debugElement.query(By.css('p')).nativeElement;
        expect(htmlElement.textContent).toBe('1');
      });
    });
  });
});
