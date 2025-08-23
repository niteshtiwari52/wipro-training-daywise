import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRecommended } from './top-recommended';

describe('TopRecommended', () => {
  let component: TopRecommended;
  let fixture: ComponentFixture<TopRecommended>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRecommended]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRecommended);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
