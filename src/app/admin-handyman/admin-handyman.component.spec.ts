import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHandymanComponent } from './admin-handyman.component';

describe('AdminHandymanComponent', () => {
  let component: AdminHandymanComponent;
  let fixture: ComponentFixture<AdminHandymanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHandymanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHandymanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
