import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  CurrencyCard,
  CurrentExchangeRate,
  DailyExchangeRate,
} from './currency-model';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  // private http = inject(HttpClient);
  private env = environment;

  private currencyInfoSubject = new BehaviorSubject<CurrentExchangeRate | null>(
    null
  );
  currencyInfo$ = this.currencyInfoSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchCurrentExchangeCurrencyCards(from_symbol: string) {
    this.http
      .get<CurrentExchangeRate>(
        `${this.env.apiUrl}currentExchangeRate?apiKey=${this.env.apiKey}`,
        {
          params: {
            from_symbol,
            to_symbol: 'BRL',
          },
          observe: 'body',
        }
      )
      .subscribe((info) => this.currencyInfoSubject.next(info));
  }

  // getDailyExchangeCurrencyCards(params: GetParams): Observable<CurrencyCard[]> {
  //   return this.http
  //     .get<DailyExchangeRate>(
  //       `${this.env.apiUrl}dailyExchangeRate?apiKey=${this.env.apiKey}`,
  //       {
  //         params: {
  //           ...params,
  //           to_symbol: 'BRL',
  //         },
  //         observe: 'body',
  //       }
  //     )
  //     .pipe(map((res) => res.data));
  // }
}
