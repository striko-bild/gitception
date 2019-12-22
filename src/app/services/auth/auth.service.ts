import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AccessToken } from './interfaces/access-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly clientId = '5a4442d08297067abfef';
  tokenObject: AccessToken;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  /*
  * Redirects the user to GitHub login page. Successful login redirects the user back to the
  * /callback endpoint with code in params. Code is then used to get the access token.
  */
  redirectToLogin(): void {
    this.document.location.href = `https://github.com/login/oauth/authorize?client_id=${this.clientId}`;
  }

  logout(): void {
    this.tokenObject = undefined;
    this.router.navigate(['/login']);
  }

  /*
  * BE fetches an access token, based on the code provided, to be used in further API calls.
  */
  handleAuthCallback(code: string): void {
    const result = this.httpClient.post<AccessToken>('http://localhost:3000/github/auth', { code });
    result.subscribe((tokenData) => {
      this.tokenObject = tokenData;
      console.log('accessToken', this.tokenObject);
      this.router.navigate(['/commits']);
    });
  }

  isAuthenticated(): boolean {
    return this.tokenObject !== undefined;
  }

}
