import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryService } from 'src/app/services/history/history.service';
@Component({
  selector: 'app-finish-page',
  templateUrl: './finish-page.component.html',
  styleUrls: ['./finish-page.component.scss'],
  imports: [],
})
export class FinishPageComponent  implements OnInit {

  constructor(public router: Router, private historyService: HistoryService) { }
  @Input() answers: any;
  @Input() questionsLength: number = 0;

  ngOnInit() {
    this.historyService.saveHistoryToLocalStorage({
      answers: this.answers,
      questionsLength: this.questionsLength,
      saveAt:  new Date()
    });
  }

}
