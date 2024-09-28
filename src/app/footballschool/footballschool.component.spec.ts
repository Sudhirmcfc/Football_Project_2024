import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballschoolComponent } from './footballschool.component';

describe('FootballschoolComponent', () => {
  let component: FootballschoolComponent;
  let fixture: ComponentFixture<FootballschoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballschoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
