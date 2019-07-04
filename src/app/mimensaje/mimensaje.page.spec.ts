import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MimensajePage } from './mimensaje.page';

describe('MimensajePage', () => {
  let component: MimensajePage;
  let fixture: ComponentFixture<MimensajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MimensajePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MimensajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
