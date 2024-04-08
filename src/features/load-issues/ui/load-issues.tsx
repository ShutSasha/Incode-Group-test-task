import { FC, useEffect, useState } from 'react'
import { DefaultInput, FlexibleButton } from '../../../shared'
import styles from './styles.module.scss'
import { getUserRepo } from '../../../shared/api'

export const LoadIssues: FC = () => {
   const [inputLinkRepo, setInputLinkRepo] = useState<string>('')
   //https://github.com/facebook/react

   useEffect(() => {
      console.log(inputLinkRepo)
   }, [inputLinkRepo])

   const handleSendLoadRepo = async () => {
      const repsonse = await getUserRepo({ owner: 'facebook', repo_name: 'react' })
      console.log(repsonse.data)
   }

   return (
      <div className={styles.load_issues_container}>
         <DefaultInput value={inputLinkRepo} inputChange={setInputLinkRepo} placeholder='Enter repo URL' />
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
}
