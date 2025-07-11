import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CurrentExchangeRate, HistoryExchangeRate } from './currency-model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private env = environment;
  private currencyInfoSubject = new BehaviorSubject<CurrentExchangeRate | null>(
    null
  );
  private currencyHistorySubject =
    new BehaviorSubject<HistoryExchangeRate | null>(null);

  currencyInfo$ = this.currencyInfoSubject.asObservable();
  currencyHistory$ = this.currencyHistorySubject.asObservable();

  constructor(private http: HttpClient) {}

  private getEndpoint(option: 'current' | 'history') {
    const endpoint = {
      current: 'currentExchangeRate',
      history: 'dailyExchangeRate',
    }[option];

    return `${this.env.apiUrl}${endpoint}?apiKey=${this.env.apiKey}`;
  }

  clearCurrencyHistory() {
    this.currencyHistorySubject.next(null);
  }

  fetchCurrentExchangeCurrencyCards(from_symbol: string) {
    this.http
      .get<CurrentExchangeRate>(this.getEndpoint('current'), {
        params: {
          from_symbol,
          to_symbol: 'BRL',
        },
        observe: 'body',
      })
      .subscribe((info) => this.currencyInfoSubject.next(info));
  }

  getCurrentCurrencyValue(): CurrentExchangeRate | null {
    return this.currencyInfoSubject.value;
  }

  fetchHistoryExchangeCurrencyCards(from_symbol: string) {
    this.http
      .get<HistoryExchangeRate>(this.getEndpoint('history'), {
        params: {
          from_symbol,
          to_symbol: 'BRL',
        },
        observe: 'body',
      })
      .subscribe((info) =>
        this.currencyHistorySubject.next({
          ...info,
          data: info.data.slice(0, 30),
        })
      );
  }
}
