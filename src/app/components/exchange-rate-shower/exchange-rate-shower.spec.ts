import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateShower } from './exchange-rate-shower';

describe('ExchangeRateShower', () => {
  let component: ExchangeRateShower;
  let fixture: ComponentFixture<ExchangeRateShower>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangeRateShower]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeRateShower);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
