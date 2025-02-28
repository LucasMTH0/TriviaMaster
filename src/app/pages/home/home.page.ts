import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { TokenService } from 'src/app/services/token/token.service';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent],
})

export class HomePage {
  constructor(
    public router: Router,
    public tokenService: TokenService
  ) {
    if(this.tokenService.getLocalStorageToken() == null){
      this.tokenService.getQuestionsAPIToken().subscribe(
        (tokenResponse: any) => this.tokenService.setLocalStorageToken(tokenResponse.token)
      );
    }
  }

  navigatePage(pageName: string) {
    this.router.navigateByUrl("/"+pageName);
  }
}
