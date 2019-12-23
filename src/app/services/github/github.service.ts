import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommitInfo } from 'src/app/interfaces/commitInfo';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private httpClient: HttpClient,
    private config: ConfigService
  ) { }

  getCommitList(): Observable<CommitInfo[]> {
    return this.httpClient.get<CommitInfo[]>(`${this.config.getServerUrl()}/github/commit`, { });
  }

}
