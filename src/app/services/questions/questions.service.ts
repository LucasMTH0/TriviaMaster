import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private http: HttpClient) { }

  public getQuestions() {
    return this.http.get('https://opentdb.com/api.php?amount=10&category=18&type=multiple')
  }
}


