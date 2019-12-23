import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AccessToken } from './interfaces/access-token';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private httpClient: HttpClient,
    private router: Router,
    private config: ConfigService
  ) { }

  /*
  * Redirects the user to GitHub login page. Successful login redirects the user back to the
  * /callback endpoint with code in params. Code is then used to get the access token.
  */
  redirectToLogin(): void {
    this.document.location.href = this.config.getGithubLoginUrl();
  }

  logout(): void {
    localStorage.set('accessToken', undefined);
    this.router.navigate(['/login']);
  }

  /*
  * BE fetches an access token, based on the code provided, to be used in further API calls.
  */
  handleAuthCallback(code: string): void {
    const result = this.httpClient.post<AccessToken>(`${this.config.getServerUrl()}/github/auth`, { code });
    result.subscribe((tokenData) => {
      localStorage.setItem('accessToken', tokenData.accessToken);
      this.router.navigate(['/commits']);
    });
  }

  getToken(): string | undefined {
    const token = localStorage.getItem('accessToken');
    if (!token || token === 'null' || token === 'undefined') {
      return undefined;
    }
    return token;
  }

}
