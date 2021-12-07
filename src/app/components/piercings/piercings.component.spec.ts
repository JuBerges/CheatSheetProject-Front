/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PiercingsComponent } from './piercings.component';

describe('PiercingsComponent', () => {
  let component: PiercingsComponent;
  let fixture: ComponentFixture<PiercingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiercingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiercingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
