import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cheese } from './cheese';

describe('Cheese', () => {
  let component: Cheese;
  let fixture: ComponentFixture<Cheese>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cheese]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cheese);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
