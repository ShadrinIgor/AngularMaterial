import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {By} from "@angular/platform-browser";
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement, ElementRef} from "@angular/core";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {AuthService} from "../../auth/auth.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthService;
  let debug: DebugElement;
  let button:ElementRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserDynamicTestingModule, RouterTestingModule],
      providers: [AuthService],
      declarations: [ HeaderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    button = debug.query(By.css('button'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the value when toggle clicked', () => {
    button.nativeElement.click();
    component.sidenavToggle.subscribe((value) => {
      expect(value).toBeTruthy();
    })
  })

  it('should authenticate when user entered to application', () => {
    component.isAuth = false;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.isAuth).toBeTruthy();
  })

  it('should component destroyed when routing activated to another page', () => {

  })

});
