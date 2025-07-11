import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CurrentExchangeRate } from '../../services/currency/currency-model';
import { CurrencyService } from '../../services/currency/currency-service';

@Component({
  selector: 'app-exchange-rate-shower',
  imports: [CommonModule],
  templateUrl: './exchange-rate-shower.html',
  styleUrl: './exchange-rate-shower.scss',
})
export class ExchangeRateShower {
  currencyService: CurrencyService = inject(CurrencyService);
  currentExchangeRate$ = this.currencyService.currencyInfo$;
}
