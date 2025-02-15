import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions/questions.service';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { Question } from '../interfaces/question';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  imports: [IonContent, IonButton],
})
export class QuestionsComponent  implements OnInit {
  protected questions: any;
  public currentQuestion = 0;
  currentAnswer = '';
  colorAnswerButton: string = 'warning'
  answers = { correct: 0, incorrect: 0 }
  constructor(
    public questionsService: QuestionsService,
    public toastrService: ToastrService
  ) {}
  
  ngOnInit() {
    this.questionsService.getQuestions().subscribe(({results}: any) => {
      console.log(results);
      this.questions = this.processQuestions(results);
    })
  }

  processQuestions(questions: any[]): any[] {
    return questions.map((question) => {
      const allAnswers = [...question.incorrect_answers, question.correct_answer];

      const shuffledAnswers = this.shuffleAnswers(allAnswers);

      return {
        ...question,
        shuffledAnswers,
      };
    });
  }

  shuffleAnswers(answers: string[]): string[] {
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
  }

  setCurrentAnswer(answer: string) {
    this.currentAnswer = answer;
  }

  checkAnswer(){
    if(this.currentAnswer === this.questions[this.currentQuestion].correct_answer) {
      this.answers.correct++;
      this.toastrService.success('Correct Answer');
      this.colorAnswerButton = 'success';
    } else {
      this.answers.incorrect++;
      this.toastrService.error('Incorrect Answer :(', 'The Correct Answer is: ' + this.questions[this.currentQuestion].correct_answer);
      this.colorAnswerButton = 'danger';
    }
    this.currentAnswer = '';
    // this.nextQuestion();
  }

  nextQuestion() {
    if(this.currentQuestion+1 < this.questions.length) {
      this.currentQuestion++;
    }
  }
}
