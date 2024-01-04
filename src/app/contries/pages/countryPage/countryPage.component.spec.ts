/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CountryPageComponent } from './countryPage.component';

describe('CountryPageComponent', () => {
  let component: CountryPageComponent;
  let fixture: ComponentFixture<CountryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
