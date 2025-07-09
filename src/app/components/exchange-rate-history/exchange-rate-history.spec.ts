import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateHistory } from './exchange-rate-history';

describe('ExchangeRateHistory', () => {
  let component: ExchangeRateHistory;
  let fixture: ComponentFixture<ExchangeRateHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangeRateHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeRateHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
