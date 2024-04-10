import { Dispatch, FC, SetStateAction, useContext, useState } from 'react'
import { DefaultInput, FlexibleButton } from '../../../shared'
import styles from './styles.module.scss'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../main'
import { handleSendLoadRepo } from '../helpers/handleSendLoadRepo'

interface LoadIssuesProps {
   setIsNotFound: Dispatch<SetStateAction<boolean>>
}

export const LoadIssues: FC<LoadIssuesProps> = observer(({ setIsNotFound }) => {
   const { store } = useContext(Context)
   const [inputLinkRepo, setInputLinkRepo] = useState<string>('')

   const handleSendLoadRepoClick = () => {
      handleSendLoadRepo(store, inputLinkRepo, setIsNotFound)
   }

   return (
      <div className={styles.load_issues_container}>
         <DefaultInput
            value={inputLinkRepo}
            inputChange={setInputLinkRepo}
            handleEnterPress={handleSendLoadRepoClick}
            placeholder='Enter repo URL'
         />
         <FlexibleButton
            handleClick={handleSendLoadRepoClick}
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
