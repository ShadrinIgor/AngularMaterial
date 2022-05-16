import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {AuthService} from "../auth.service";

import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {of} from "rxjs";


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
  authServiceSpy.login.and.returnValue(of());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule,  ReactiveFormsModule],
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
      "password": "@something.com"
    }
    component.loginForm.setValue(formData);
    authServiceSpy.login(formData);
    fixture.detectChanges();
    expect(authServiceSpy.login).toHaveBeenCalledTimes(1);
  })
});
