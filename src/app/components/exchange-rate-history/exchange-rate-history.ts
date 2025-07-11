import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CurrencyService } from '../../services/currency/currency-service';
import { CurrencyCard } from '../../services/currency/currency-model';

@Component({
  selector: 'app-exchange-rate-history',
  imports: [CommonModule],
  templateUrl: './exchange-rate-history.html',
  styleUrl: './exchange-rate-history.scss',
})
export class ExchangeRateHistory {
  modalOpen = false;
  currencyService: CurrencyService = inject(CurrencyService);
  currencyCards: CurrencyCard[] = [];

  constructor() {
    // this.currencyService
    //   .getDailyExchangeCurrencyCards({
    //     from_symbol: 'USD',
    //   })
    //   .subscribe((cards) => {
    //     this.currencyCards = cards;
    //   });
  }

  toggleModal() {
    return (this.modalOpen = !this.modalOpen);
  }
}
