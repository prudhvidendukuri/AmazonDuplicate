import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayCardsComponent } from './today-cards.component';

describe('TodayCardsComponent', () => {
  let component: TodayCardsComponent;
  let fixture: ComponentFixture<TodayCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
