import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { GithubService } from './services/github/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private authService: AuthService,
    private githubService: GithubService,
  ) {
    // @ts-ignore;
    window.authService = this.authService;
    // @ts-ignore;
    window.githubService = this.githubService;
  }
}
