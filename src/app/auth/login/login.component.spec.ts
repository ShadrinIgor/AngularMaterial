import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {AuthService} from "../auth.service";

import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {of} from "rxjs";
import {By} from "@angular/platform-browser";
import { MatFormFieldModule, MatHint} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
  authServiceSpy.login.and.returnValue(of());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule
      ],
      providers: [AuthService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require valid email', () => {
    component.loginForm.setValue({
      "email": "invalidEmail",
      "password": ""
    });
    expect(component.loginForm.valid).toEqual(false);
  })

  it("should be valid if the form is valid", () => {
    component.loginForm.setValue({
      "email": "validEmail@email.ru",
      "password": "1234567"
    });
    expect(component.loginForm.valid).toEqual(true);

  })

  it('should allow user to log in', () => {
    const formData = {
      "email": "something@somewhere.com",
      "password": "123456"
    }
    component.loginForm.setValue(formData);
    authServiceSpy.login(formData);
    fixture.detectChanges();
    expect(authServiceSpy.login).toHaveBeenCalledWith(formData);
  })

  it('should not allow user to log in', () => {
    const formData = {
      "email": "1234667",
      "password": "something.com"
    }
    component.loginForm.setValue(formData);
    authServiceSpy.login(formData);
    fixture.detectChanges();
    expect(authServiceSpy.login).toHaveBeenCalledTimes(1);
  })

  it('should submit the form  when the submit button is clicked', () => {
    const fnc = spyOn(component, 'onSubmit').and.callThrough();
    const btnElement = fixture.debugElement.query(By.css('button'))
    btnElement.nativeElement.click();
    let form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);
    fixture.detectChanges();
    expect(fnc).toHaveBeenCalled();
  })

  it('should create two controls in form', () => {
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  })

  it('should display error to invalid email', () => {
    const formData = {
      "email": "1234667",
      "password": "something.com"
    }
    component.loginForm.setValue(formData);
    fixture.detectChanges();
    expect(component.loginForm.controls['email'].hasError('email')).toBeTruthy();
  })

  it('should display hint under the input when user touched and  did not write', () => {
    const element = fixture.debugElement.queryAll(By.directive(MatHint));
    component.loginForm.markAsTouched();
    fixture.detectChanges();
    expect(element).toBeTruthy();
  })
});
