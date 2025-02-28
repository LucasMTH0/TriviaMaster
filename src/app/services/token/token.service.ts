import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  expirationTime: number = 6;
  constructor(public http: HttpClient) { }

  public getQuestionsAPIToken(){
    return this.http.get('https://opentdb.com/api_token.php?command=request')
  }

  setLocalStorageToken(token: string){
    const currentTime = new Date().getTime();
    const expiration =  currentTime + (this.expirationTime * 60 * 1000);
    const item = {
      token: token,
      expiration: expiration
    };
    localStorage.setItem('@triviaMaster:token', JSON.stringify(item));
  }

  getLocalStorageToken() {
    const token = localStorage.getItem('@triviaMaster:token');
    const tokenParsed = JSON.parse(token as string);
    if (!tokenParsed) return null;
    const now = new Date().getTime();
    if (now > tokenParsed.expiration) {
        localStorage.removeItem('@triviaMaster:token');
        return null;
    }
    return tokenParsed.token;
}

}
