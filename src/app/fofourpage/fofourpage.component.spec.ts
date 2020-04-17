import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FofourpageComponent } from './fofourpage.component';

describe('FofourpageComponent', () => {
  let component: FofourpageComponent;
  let fixture: ComponentFixture<FofourpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FofourpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FofourpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
