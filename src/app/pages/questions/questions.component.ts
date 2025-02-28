import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions/questions.service';
import { IonContent } from '@ionic/angular/standalone';
import { Question } from '../../interfaces/question';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FinishPageComponent } from '../../components/finish-page/finish-page.component';
import { QuestionComponent } from '../../components/question/question.component';
import { TokenService } from 'src/app/services/token/token.service';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  imports: [IonContent,  FinishPageComponent, QuestionComponent],
})
export class QuestionsComponent  implements OnInit {
  protected questions: any;
  public currentQuestion = 0;

  answers = { correct: 0, incorrect: 0 }
  colorAnswerButton: string = 'warning';
  currentAnswer: string | null = null;
  confirmedAnswer: boolean = false;
  categoryId: number = 0;
  token: string = '';
  correctAnswer = ''

  constructor(
    public questionsService: QuestionsService,
    public toastrService: ToastrService,
    public tokenService: TokenService,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.categoryId = Number(this.route.snapshot.queryParamMap.get('categoryId'));
    this.token = this.tokenService.getLocalStorageToken()
  }
  
  ngOnInit() {
    this.questionsService.getQuestions(this.categoryId, this.token).subscribe(({results}: any) => {
      console.log("perguntas: ", results)
      this.questions = this.processQuestions(results);
      this.correctAnswer = results[this.currentQuestion].correct_answer
    })
  }

  processQuestions(questions: any[]): any[] {
    return questions.map((question) => {
      const allAnswers = [...question.incorrect_answers, question.correct_answer];
      const shuffledAnswers = this.questionsService.shuffleAnswers(allAnswers);
      return {...question, shuffledAnswers};
    });
  }
  
  saveAnswer(answer: string) {
    this.currentAnswer = answer;
  }

  checkAnswer() {
    if(this.currentAnswer === this.questions[this.currentQuestion].correct_answer) {
      this.answers.correct+=1;
      this.toastrService.success('Certo!','', {
        timeOut: 3000,
      });
    } else {
      this.answers.incorrect+=1;
      this.toastrService.error('Errou :(','', {
        timeOut: 3000,
      });
    }
    this.currentAnswer = null;
    this.nextQuestion();
  }

  getButtonColor(choice: string): string {
    if (this.currentAnswer === null || this.confirmedAnswer === false) {
      return 'primary';
    }
    if (choice === this.correctAnswer && this.confirmedAnswer === true) {
      return 'success'; 
    } else if (choice === this.correctAnswer && this.confirmedAnswer === true) {
      return 'danger'; 
    } else {
      return 'medium'; 
    }
  }

  nextQuestion() {
    this.confirmedAnswer = true
    setTimeout(() => {
      this.currentQuestion++;
      this.confirmedAnswer = false
      this.currentAnswer = null;
    }, 3000);
  }
}
