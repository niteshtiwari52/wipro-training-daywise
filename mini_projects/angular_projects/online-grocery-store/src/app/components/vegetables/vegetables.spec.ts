import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vegetables } from './vegetables';

describe('Vegetables', () => {
  let component: Vegetables;
  let fixture: ComponentFixture<Vegetables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vegetables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vegetables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
