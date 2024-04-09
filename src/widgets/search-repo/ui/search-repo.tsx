import { FC, useContext, useState } from 'react'
import { LoadIssues } from '../../../features'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../main'
import { RepoInfo } from './repo-info'

export const SearchRepo: FC = observer(() => {
   const { store } = useContext(Context)
   const { owner_name, owner_url, repo_name, repo_url, stargazers_count } = store
   const [isNotFound, setIsNotFound] = useState<boolean>(false)

   return (
      <>
         <LoadIssues setIsNotFound={setIsNotFound} />
         {owner_name && repo_name && owner_url && repo_url && !isNotFound && (
            <RepoInfo
               owner_name={owner_name}
               owner_url={owner_url}
               repo_name={repo_name}
               repo_url={repo_url}
               stargazers_count={stargazers_count}
            />
         )}
         {isNotFound && (
            <p style={{ margin: '15px 0 20px', color: '#ff6666' }}>Repo hasn't founded try to enter repo url correct</p>
         )}
      </>
   )
})
