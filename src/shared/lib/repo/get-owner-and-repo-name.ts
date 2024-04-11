type OwnerRepo = {
   owner: string
   repo: string
}

export const getOwnerAndRepoName = (url: string): OwnerRepo => {
   let parts = url.split('/')
   let repoIndex = parts.indexOf('github.com') + 1

   let owner = parts[repoIndex]
   let repo = parts[repoIndex + 1]

   return { owner, repo }
}
