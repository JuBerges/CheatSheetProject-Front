/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TatsComponent } from './tats.component';

describe('TatsComponent', () => {
  let component: TatsComponent;
  let fixture: ComponentFixture<TatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
