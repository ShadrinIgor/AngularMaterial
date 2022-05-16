import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTrainingComponent } from './current-training.component';
import {By} from "@angular/platform-browser";
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement, ElementRef} from "@angular/core";
import {MAT_DIALOG_DATA, MAT_DIALOG_SCROLL_STRATEGY, MatDialog, MatDialogModule} from "@angular/material/dialog";
import {Overlay} from "@angular/cdk/overlay";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('CurrentTrainingComponent', () => {
  let component: CurrentTrainingComponent;
  let fixture: ComponentFixture<CurrentTrainingComponent>;
  let debug: DebugElement;
  let button:ElementRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, BrowserDynamicTestingModule, BrowserAnimationsModule],
      declarations: [ CurrentTrainingComponent ],
      providers : [{
        provide : MAT_DIALOG_DATA,
        useValue : {}
      }, Overlay,
        {

        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTrainingComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    button = debug.query(By.css('button'));
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event when clicked the button', () => {
    button.nativeElement.click();
    component.trainingExit.subscribe(value =>{
      expect(value).toBeTruthy();
    })
  })

  it('should set the value at each tick', () => {
    let progress = 0;
    component.startOrResumeTimer();
    fixture.detectChanges();
    expect(progress).toEqual(5);
  })

  it('should', () => {

  })



});
