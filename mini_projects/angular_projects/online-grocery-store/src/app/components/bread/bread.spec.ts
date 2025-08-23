import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bread } from './bread';

describe('Bread', () => {
  let component: Bread;
  let fixture: ComponentFixture<Bread>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bread]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bread);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
