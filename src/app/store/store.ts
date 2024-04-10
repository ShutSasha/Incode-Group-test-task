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

   setDraggableIssue(source_index: number, destination_index: number, column_id: string) {
      if (column_id === 'column-1') {
         let from = this.to_do_issues[source_index]
         let to = this.to_do_issues[destination_index]
         this.to_do_issues[source_index] = to
         this.to_do_issues[destination_index] = from
      }
      if (column_id === 'column-2') {
         let from = this.open_issues[source_index]
         let to = this.open_issues[destination_index]
         this.open_issues[source_index] = to
         this.open_issues[destination_index] = from
      }
      if (column_id === 'column-3') {
         let from = this.closed_issues[source_index]
         let to = this.closed_issues[destination_index]
         this.closed_issues[source_index] = to
         this.closed_issues[destination_index] = from
      }
   }
}
