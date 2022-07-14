import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderlistComponent } from './headerlist.component';

describe('HeaderlistComponent', () => {
  let component: HeaderlistComponent;
  let fixture: ComponentFixture<HeaderlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
