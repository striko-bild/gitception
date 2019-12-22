import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {

    // If no token is found in the local storage, redirects to Github login
    if (!this.authService.getToken()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

}
