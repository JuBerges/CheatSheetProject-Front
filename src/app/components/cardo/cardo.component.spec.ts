/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardoComponent } from './cardo.component';

describe('CardoComponent', () => {
  let component: CardoComponent;
  let fixture: ComponentFixture<CardoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
