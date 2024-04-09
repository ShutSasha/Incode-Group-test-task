import { makeAutoObservable } from 'mobx'
import { IssueCardInfo } from '../../shared/api'

export default class Store {
   owner_name = ''
   owner_url = ''

   repo_name = ''
   repo_url = ''

   stargazers_count = 0

   to_do_issues = [] as IssueCardInfo[]
   open_issues = [] as IssueCardInfo[]
   closed_issues = [] as IssueCardInfo[]

   constructor() {
      makeAutoObservable(this)
   }

   setOwnerName(name: string) {
      this.owner_name = name
   }

   setOwnerUrl(url: string) {
      this.owner_url = url
   }

   setRepoName(name: string) {
      this.repo_name = name
   }

   setRepoUrl(url: string) {
      this.repo_url = url
   }

   setStargazersCount(count: number) {
      this.stargazers_count = count
   }

   setToDoIssues(issues: IssueCardInfo[]) {
      this.to_do_issues = issues
   }

   setOpenIssues(issues: IssueCardInfo[]) {
      this.open_issues = issues
   }

   setClosedIssues(issues: IssueCardInfo[]) {
      this.closed_issues = issues
   }
}
