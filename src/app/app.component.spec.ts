import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import {LikeComponent} from './like/like.component';

describe('AppComponent', () => {
  describe('unit', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent
        ],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
      }).compileComponents();
    }));

    it('should create the app', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }));
  });

  describe('acceptance', () => {
    let fixture;
    let component;
    let view;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          LikeComponent
        ],
      }).compileComponents();
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
      view = fixture.debugElement.nativeElement;
      fixture.detectChanges();
    }));

    it('user can like a post', () => {
      view.querySelector('button').click();
      fixture.detectChanges();
      expect(view.textContent).toContain('1 Like');
    });
  });
});
