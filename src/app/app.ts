import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input-component/input-component';
import { ExchangeRateShower } from './components/exchange-rate-shower/exchange-rate-shower';
import { ExchangeRateHistory } from './components/exchange-rate-history/exchange-rate-history';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

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

  form = new FormGroup({
    currency: new FormControl(''),
  });

  submit() {
    console.log('entrou');
    console.log(this.form.value);
  }
}
