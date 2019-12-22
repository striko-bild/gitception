import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommitInfo } from 'src/app/interfaces/commitInfo';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})

export class CommitsComponent {

  headers: string[];
  elements: CommitInfo[];

  constructor(
    private route: ActivatedRoute,
  ) {
    // @ts-ignore
    window.commits = this.route.snapshot.data.commitList;
    // @ts-ignore
    this.headers = ['Commit', 'Message', 'Author', 'Authored time', 'Commiter', 'Commited time'];
    this.elements = this.route.snapshot.data.commitList;
  }

}
