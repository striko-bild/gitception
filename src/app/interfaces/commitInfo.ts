export interface CommitInfo {
  readonly sha: string;
  readonly author: string;
  readonly authoredTime: string;
  readonly committer: string;
  readonly commitTime: string;
  readonly commitMessage: string;
  readonly url: string;
}
