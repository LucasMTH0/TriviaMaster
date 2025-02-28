import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history/history.service';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  imports: [IonContent]
})
export class HistoryComponent  implements OnInit {
  historyList: any[] = [];
  constructor(public historyService: HistoryService, public router: Router) { }

  ngOnInit() {
    this.historyList = this.historyService.getHistoryFromLocalStorage();
  }

  formatDate(data: Date): string {
    const day = String(data.getUTCDate()).padStart(2, '0');
    const month = String(data.getUTCMonth() + 1).padStart(2, '0');
    const year = data.getUTCFullYear();

    return `${day}/${month}/${year}`;
  }

}
