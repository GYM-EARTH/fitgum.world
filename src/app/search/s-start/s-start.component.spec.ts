import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SStartComponent } from './s-start.component';

describe('SStartComponent', () => {
  let component: SStartComponent;
  let fixture: ComponentFixture<SStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
