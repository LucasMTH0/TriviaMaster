import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss'],
  imports: [IonContent],
  standalone: true,
})
export class SelectCategoryComponent  implements OnInit {
  public categories: any;

  constructor(
    public questionsService: QuestionsService, 
    public router: Router
  ) {}

  ngOnInit() {
    this.questionsService.getCategories().subscribe(({trivia_categories}: any) => {
      console.log(trivia_categories)
      this.categories = trivia_categories;
    })
  }

  filterTypeCategory(category: string){
    console.log(category)
    const categorySplited = category.split(':')
    console.log(categorySplited)
    return categorySplited[1] && categorySplited[1].length > 0 ? categorySplited[1] : category
  }

}
