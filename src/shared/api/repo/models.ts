export type RepoInfo = {
   owner: string
   repo_name: string
}

type User = {
   login: string
}

export type IssueCardInfo = {
   id: number
   number: number
   title: string
   created_at: string
   user: User
   comments: number
}
