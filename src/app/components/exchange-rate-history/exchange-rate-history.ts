import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exchange-rate-history',
  imports: [CommonModule],
  templateUrl: './exchange-rate-history.html',
  styleUrl: './exchange-rate-history.scss',
})
export class ExchangeRateHistory {
  modalOpen = false;
  currencyCards = [
    {
      id: 1,
      open: '5.0013',
      close: '5.0023',
      high: '5.0045',
      low: '4.4323',
      closeDiff: '1.15',
      date: '2022-03-12',
    },
    {
      id: 2,
      open: '5.0013',
      close: '5.0023',
      high: '5.0045',
      low: '4.4323',
      closeDiff: '1.15',
      date: '2022-03-11',
    },
    {
      id: 3,
      open: '5.0013',
      close: '5.0023',
      high: '5.0045',
      low: '4.4323',
      closeDiff: '1.15',
      date: '2022-03-10',
    },
  ];

  toggleModal() {
    return (this.modalOpen = !this.modalOpen);
  }
}
