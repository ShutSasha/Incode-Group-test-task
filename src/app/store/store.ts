import { makeAutoObservable } from 'mobx'
import { IssueCardInfo } from '../../shared/api'
import { initialDataColums } from '../../pages/home/consts/initialDataColumns'

export default class Store {
   owner_name = ''
   owner_url = ''

   repo_name = ''
   repo_url = ''

   stargazers_count = 0

   to_do_issues = [] as IssueCardInfo[]
   open_issues = [] as IssueCardInfo[]
   closed_issues = [] as IssueCardInfo[]

   column_initial_state = initialDataColums

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

   saveToLocalStorage() {
      const data = {
         owner_name: this.owner_name,
         owner_url: this.owner_url,
         repo_name: this.repo_name,
         repo_url: this.repo_url,
         stargazers_count: this.stargazers_count,
         to_do_issues: this.to_do_issues,
         open_issues: this.open_issues,
         closed_issues: this.closed_issues,
         column_initial_state: this.column_initial_state,
      }
      localStorage.setItem(`${this.repo_url}`, JSON.stringify(data))
   }

   loadFromLocalStorage(repo_url: string) {
      const dataString = localStorage.getItem(repo_url)
      if (dataString) {
         const data = JSON.parse(dataString)
         this.owner_name = data.owner_name
         this.owner_url = data.owner_url
         this.repo_name = data.repo_name
         this.repo_url = data.repo_url
         this.stargazers_count = data.stargazers_count
         this.to_do_issues = data.to_do_issues
         this.open_issues = data.open_issues
         this.closed_issues = data.closed_issues
         this.column_initial_state = data.column_initial_state
      }
   }

   setDraggableColumn(source_index: number, destination_index: number) {
      // Swap columns
      let fromColumn = this.column_initial_state.columns[source_index]
      let toColumn = this.column_initial_state.columns[destination_index]
      this.column_initial_state.columns[source_index] = toColumn
      this.column_initial_state.columns[destination_index] = fromColumn

      // Swap columnOrder
      let fromOrder = this.column_initial_state.columnOrder[source_index]
      let toOrder = this.column_initial_state.columnOrder[destination_index]
      this.column_initial_state.columnOrder[source_index] = toOrder
      this.column_initial_state.columnOrder[destination_index] = fromOrder
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

   resetData() {
      this.owner_name = ''
      this.owner_url = ''

      this.repo_name = ''
      this.repo_url = ''

      this.stargazers_count = 0

      this.to_do_issues = [] as IssueCardInfo[]
      this.open_issues = [] as IssueCardInfo[]
      this.closed_issues = [] as IssueCardInfo[]

      this.column_initial_state = initialDataColums
   }
}
