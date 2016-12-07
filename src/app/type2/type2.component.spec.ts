/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Type2Component } from './type2.component';

describe('Type2Component', () => {
  let component: Type2Component;
  let fixture: ComponentFixture<Type2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Type2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Type2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
