import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ASingleComponent } from './a-single.component';

describe('ASingleComponent', () => {
  let component: ASingleComponent;
  let fixture: ComponentFixture<ASingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ASingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ASingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
