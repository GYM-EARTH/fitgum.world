import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClubsComponent } from './home-clubs.component';

describe('HomeClubsComponent', () => {
  let component: HomeClubsComponent;
  let fixture: ComponentFixture<HomeClubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeClubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
