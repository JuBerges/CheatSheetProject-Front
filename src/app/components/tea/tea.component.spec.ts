/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeaComponent } from './tea.component';

describe('TeaComponent', () => {
  let component: TeaComponent;
  let fixture: ComponentFixture<TeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
