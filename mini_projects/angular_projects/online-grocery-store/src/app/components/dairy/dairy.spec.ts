import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dairy } from './dairy';

describe('Dairy', () => {
  let component: Dairy;
  let fixture: ComponentFixture<Dairy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dairy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dairy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
