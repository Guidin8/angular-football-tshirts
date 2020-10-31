import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballShirtsComponent } from './football-shirts.component';

describe('FootballShirtsComponent', () => {
  let component: FootballShirtsComponent;
  let fixture: ComponentFixture<FootballShirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballShirtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
