import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { GithubService } from 'src/app/services/github/github.service';
import { Observable } from 'rxjs';
import { CommitInfo } from 'src/app/interfaces/commitInfo';

@Injectable({
  providedIn: 'root'
})

export class CommitResolver implements Resolve<CommitInfo[]> {

  constructor(private githubService: GithubService) { }

  resolve(): Observable<CommitInfo[]> {

    return this.githubService.getCommitList();

  }

}
