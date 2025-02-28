import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private http: HttpClient) { }


  public getQuestions(categoryId: number, token: string, amount: number = 10,  type: string = 'multiple', difficulty: 'easy' | 'medium' | 'hard' = 'medium') {
    // return this.http.get('https://opentdb.com/api.php?amount=10&category=18&type=multiple')
    return this.http.get(`https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&type=multiple&token=${token}`
    )
  }

  public getCategories(){
    return this.http.get('https://opentdb.com/api_category.php')
  }

  shuffleAnswers(answers: string[]): string[] {
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
  }

}


