import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoggedRedirectComponent} from './logged-redirect.component';

describe('LoginRedirectComponent', () => {
  let component: LoggedRedirectComponent;
  let fixture: ComponentFixture<LoggedRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoggedRedirectComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoggedRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
