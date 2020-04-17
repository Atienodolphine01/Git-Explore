import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersprofileComponent } from './usersprofile.component';

describe('UsersprofileComponent', () => {
  let component: UsersprofileComponent;
  let fixture: ComponentFixture<UsersprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
