import { Dispatch, FC, SetStateAction, useContext, useState } from 'react'
import { DefaultInput, FlexibleButton } from '../../../shared'
import styles from './styles.module.scss'
import { getClosedIssues, getToDoIssues, getUserRepo } from '../../../shared/api'
import { getOwnerAndRepoName } from '../helpers/getOwnerAndRepoName'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../main'

interface LoadIssuesProps {
   setIsNotFound: Dispatch<SetStateAction<boolean>>
}

export const LoadIssues: FC<LoadIssuesProps> = observer(({ setIsNotFound }) => {
   const { store } = useContext(Context)
   const [inputLinkRepo, setInputLinkRepo] = useState<string>('')

   const handleSendLoadRepo = async () => {
      try {
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

   return (
      <div className={styles.load_issues_container}>
         <DefaultInput
            value={inputLinkRepo}
            inputChange={setInputLinkRepo}
            handleEnterPress={handleSendLoadRepo}
            placeholder='Enter repo URL'
         />
         <FlexibleButton
            handleClick={handleSendLoadRepo}
            text='Load issues'
            style={{
               padding: '5px 20px',
               whiteSpace: 'nowrap',
               fontSize: '20px',
               lineHeight: '22px',
               color: '#fff',
               backgroundColor: '#3cce7b',
               borderRadius: '6px',
            }}
         />
      </div>
   )
})
