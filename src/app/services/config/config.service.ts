import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/app/interfaces/app-config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private appConfig: AppConfig;

  constructor(private httpClient: HttpClient) { }

  loadAppConfig() {
    return this.httpClient
      .get('/assets/config.json')
      .toPromise()
      .then(data => {
        this.appConfig = data as AppConfig;
      });
  }

  getServerUrl(): string {
    return this.appConfig.API_URL;
  }

  getGithubLoginUrl(): string {
    return this.appConfig.GITHUB_LOGIN_URL;
  }
}
