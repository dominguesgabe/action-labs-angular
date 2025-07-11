import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { Component, inject, LOCALE_ID } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ExchangeRateHistory } from './components/exchange-rate-history/exchange-rate-history';
import { ExchangeRateShower } from './components/exchange-rate-shower/exchange-rate-shower';
import { InputComponent } from './components/input-component/input-component';
import { CurrencyService } from './services/currency/currency-service';

registerLocaleData(ptBr);

@Component({
  selector: 'app-root',
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ExchangeRateShower,
    ExchangeRateHistory,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class App {
  protected title = 'action-labs-app';
  currencyService = inject(CurrencyService);

  currencyForm = new FormGroup({
    currencyCode: new FormControl(''),
  });

  onSubmit() {
    const code = this.currencyForm.get('currencyCode')?.value;
    if (!code) return;

    this.currencyService.fetchCurrentExchangeCurrencyCards(code.toUpperCase());
  }
}
