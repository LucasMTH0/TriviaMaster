import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  saveHistoryToLocalStorage(history: any) {
    const historyList = this.getHistoryFromLocalStorage();
    historyList.push(history);
    localStorage.setItem('@triviaMaster:history', JSON.stringify(historyList));
  }
  getHistoryFromLocalStorage() {
    const history = localStorage.getItem('@triviaMaster:history');
    return history ? JSON.parse(history) : [];
  }
}
