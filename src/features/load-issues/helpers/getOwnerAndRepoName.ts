export const getOwnerAndRepoName = (url: string): { owner: string; repo: string } => {
   let parts = url.split('/')
   let owner = parts[parts.length - 2]
   let repo = parts[parts.length - 1]

   return { owner, repo }
}
