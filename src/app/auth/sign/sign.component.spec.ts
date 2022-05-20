import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignComponent } from './sign.component';
import {By} from "@angular/platform-browser";
import {AuthService} from "../auth.service";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('SignComponent', () => {
  let component: SignComponent;
  let fixture: ComponentFixture<SignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignComponent ],
      imports: [RouterTestingModule, FormsModule, BrowserDynamicTestingModule, ReactiveFormsModule],
      providers: [AuthService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the form when button clicked', () => {
    const fnc = spyOn(component, 'onSubmit').and.callThrough();
    const btnElement = fixture.debugElement.query(By.css('button'))
    btnElement.nativeElement.click();
    fixture.detectChanges();
    expect(fnc).toHaveBeenCalled();
  })
});
