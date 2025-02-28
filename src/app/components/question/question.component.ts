import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  standalone: true,
  imports: [ CommonModule ],
})
export class QuestionComponent  implements OnInit {
  @Input() isConfirmedAnswer: boolean = false;
  @Input() question: any;
  @Output() callNextQuestion = new EventEmitter<void>();
  @Output() emitterCurrentAnswer = new EventEmitter<string>();
  // @Output() resultAnswer = new EventEmitter<'correct' | 'incorrect'>();
  currentAnswer: string | null = null;
  confirmedAnswer: boolean = false;

  constructor() { }

  ngOnInit() {}

  // getButtonColor(choice: string, currentAnswer: string, confirmedAnswer: boolean): string {
  //   if (currentAnswer === null || confirmedAnswer === false) {
  //     return 'primary';
  //   }
  //   if (choice === this.question.correctAnswer && confirmedAnswer === true) {
  //     return 'success'; 
  //   } else if (choice === this.question.correctAnswer && confirmedAnswer === true) {
  //     return 'danger'; 
  //   } else {
  //     return 'medium'; 
  //   }
  // }

  setCurrentAnswer(answer: string) {
    this.currentAnswer = answer;
    this.emitterCurrentAnswer.emit(answer);
  }

  // checkAnswer(){
  //   this.confirmedAnswer = true
  //   if(this.currentAnswer === this.question.correct_answer) {
  //     this.resultAnswer.emit('correct');
  //   } else {
  //     this.resultAnswer.emit('incorrect');
  //   }
  //   this.currentAnswer = null;
  //   this.callNextQuestion.emit();
  // }
}
