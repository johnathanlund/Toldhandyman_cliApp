import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToldHandymanComponent } from './told-handyman.component';

describe('ToldHandymanComponent', () => {
  let component: ToldHandymanComponent;
  let fixture: ComponentFixture<ToldHandymanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToldHandymanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToldHandymanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
