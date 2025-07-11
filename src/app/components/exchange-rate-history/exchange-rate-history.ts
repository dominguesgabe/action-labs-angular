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
  currencyService = inject(CurrencyService);
  currentExchangeRate$ = this.currencyService.currencyInfo$;
  historyExchangeRate$ = this.currencyService.currencyHistory$;

  setModalOpen(boolean: boolean) {
    return (this.modalOpen = boolean);
  }

  handleHistoryExchangeRate() {
    const currentCurrency =
      this.currencyService.getCurrentCurrencyValue()?.fromSymbol;

    if (!currentCurrency) return;

    this.currencyService.fetchHistoryExchangeCurrencyCards(currentCurrency);
    this.setModalOpen(true);
  }

  ngOnInit() {
    this.currentExchangeRate$.subscribe((currency) => {
      if (currency) {
        this.currencyService.clearCurrencyHistory();
        this.setModalOpen(false);
      }
    });
  }

  getCloseDiff(index: number, data: CurrencyCard[]) {
    if (index === 0) return 0;

    const today = data[index];
    const yesterday = data[index - 1];

    if (!yesterday || yesterday.close === 0) return 0;

    return ((today.close - yesterday.close) / yesterday.close) * 100;
  }
}
