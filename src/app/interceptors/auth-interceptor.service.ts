import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { GithubService } from '../services/github/github.service';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isAuthenticated()) {
      console.log('authenticated');
      request = request.clone({
        setHeaders: {
          Authorization: `token ${this.authService.tokenObject.accessToken}`
        }
      });
    }
    console.log('request', request);

    return next.handle(request);
  }

}
