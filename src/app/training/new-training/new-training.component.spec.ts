import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrainingComponent } from './new-training.component';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement, ElementRef} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('NewTrainingComponent', () => {
  let component: NewTrainingComponent;
  let fixture: ComponentFixture<NewTrainingComponent>;
  let debug: DebugElement;
  let button:ElementRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTrainingComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrainingComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    button = debug.query(By.css('button'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should emit when the button is clicked', () => {
    button.nativeElement.click();
    component.trainingStart.subscribe(value => {
      expect(value).toBeTruthy();
    });
  });

});
