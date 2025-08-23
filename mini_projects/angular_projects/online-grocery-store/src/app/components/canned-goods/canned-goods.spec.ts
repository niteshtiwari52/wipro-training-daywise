import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannedGoods } from './canned-goods';

describe('CannedGoods', () => {
  let component: CannedGoods;
  let fixture: ComponentFixture<CannedGoods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CannedGoods]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CannedGoods);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
