import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  constructor() {}

  increaseActiveToInactiveUser() {
    this.activeToInactiveCounter++;
  }


  increaseInactiveToActiveUser() {
    this.inactiveToActiveCounter++;
  }
}

