import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, ViewChild} from '@angular/core';

import { LikeComponent } from './like.component';

describe('LikeComponent', () => {
  describe('without input', () => {
    let component: LikeComponent;
    let view;
    let fixture: ComponentFixture<LikeComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ LikeComponent ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(LikeComponent);
      component = fixture.debugElement.componentInstance;
      view = fixture.debugElement.nativeElement;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize button with 0 like', () => {
      expect(view.textContent).toContain('0 Like');
    });

    it('should add 1 like when clicking on the button', () => {
      view.querySelector('button').click();
      fixture.detectChanges();
      expect(view.textContent).toContain('1 Like');
    });

    it('should add 1 like when clicking on the button to display 9', () => {
      component.nbLike = 8;
      view.querySelector('button').click();
      fixture.detectChanges();
      expect(view.textContent).toContain('9 Like');
    });

    it('should initialize button with nbLike props', () => {
      // Wrong test !
      component.nbLike = 8;
      fixture.detectChanges();
      expect(view.textContent).toContain('8 Like');
    });
  });

  describe('damn !', () => {
    it('should proerly initialize button with nbLike props', async(() => {
      @Component({
        selector: `host-component`,
        template: `<app-like [nbLike]="nbLike"></app-like>`
      })
      class TestHostComponent {
        public nbLike: number;
      }

      TestBed.configureTestingModule({
        declarations: [LikeComponent, TestHostComponent]
      })
        .compileComponents();

      const testHostFixture = TestBed.createComponent(TestHostComponent);
      const testHostComponent = testHostFixture.componentInstance;
      testHostComponent.nbLike = 8;
      testHostFixture.detectChanges();

      expect(testHostFixture.debugElement.nativeElement.textContent).toContain('8 Like');
    }));
  });
});
