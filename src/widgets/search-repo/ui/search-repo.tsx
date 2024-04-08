import { FC, useEffect, useState } from 'react'
import { LoadIssues } from '../../../features'
import { LinkTo } from '../../../entities'
import styles from './styles.module.scss'

export const SearchRepo: FC = () => {
   const [linkText, setLinkText] = useState<string | undefined>(undefined)
   const [link, setLink] = useState<string | undefined>(undefined)

   useEffect(() => {
      setLinkText('Facebook')
      setLink('https://github.com/incodellc/github-kanban-test-task')
   }, [])

   return (
      <>
         <LoadIssues />
         <div className={styles.repo_links_list}>
            {linkText && link && <LinkTo style={{ color: '#4159cc', fontSize: '20px' }} text={linkText} link={link} />}
            {linkText && link && <LinkTo style={{ color: '#4159cc', fontSize: '20px' }} text={linkText} link={link} />}
         </div>
      </>
   )
}
