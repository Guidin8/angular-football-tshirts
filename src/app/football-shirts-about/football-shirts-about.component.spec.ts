import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballShirtsAboutComponent } from './football-shirts-about.component';

describe('FootballShirtsAboutComponent', () => {
  let component: FootballShirtsAboutComponent;
  let fixture: ComponentFixture<FootballShirtsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballShirtsAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballShirtsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
