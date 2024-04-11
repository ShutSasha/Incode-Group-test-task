import { Dispatch, SetStateAction } from 'react'
import Store from '../../../app/store/store'
import { getClosedIssues, getToDoIssues, getUserRepo } from '../../../shared/api'
import { getOwnerAndRepoName } from '../../../shared/lib/index'

export const handleSendLoadRepo = async (
   store: Store,
   inputLinkRepo: string,
   setIsNotFound: Dispatch<SetStateAction<boolean>>,
) => {
   try {
      const storedData = localStorage.getItem(inputLinkRepo)

      if (store.repo_url) {
         store.saveToLocalStorage()
      }

      if (storedData) {
         store.loadFromLocalStorage(inputLinkRepo)
         setIsNotFound(false)
         return
      }

      if (!storedData) {
         store.resetData()
      }

      const { owner, repo } = getOwnerAndRepoName(inputLinkRepo)
      const UserRepoResponse = await getUserRepo({ owner: owner, repo_name: repo })

      if (UserRepoResponse.status === 200) {
         store.setOwnerUrl(UserRepoResponse.data.owner.html_url)
         store.setOwnerName(owner)

         store.setRepoName(repo)
         store.setRepoUrl(UserRepoResponse.data.html_url)

         store.setStargazersCount(UserRepoResponse.data.stargazers_count)

         setIsNotFound(false)

         const ToDoIssuesResponse = await getToDoIssues({ owner: owner, repo_name: repo })
         const ToDoIssues = ToDoIssuesResponse.data.filter((issue: any) => issue.assignee === null)
         store.setToDoIssues(ToDoIssues)

         const OpenIssues = ToDoIssuesResponse.data.filter((issue: any) => issue.assignee)
         store.setOpenIssues(OpenIssues)

         const ClosedIssuesResponse = await getClosedIssues({ owner: owner, repo_name: repo })
         store.setClosedIssues(ClosedIssuesResponse.data)
      }
   } catch (error) {
      console.error(error)
      if (error) {
         setIsNotFound(true)
         store.setToDoIssues([])
         store.setOpenIssues([])
         store.setClosedIssues([])
      }
   }
}
