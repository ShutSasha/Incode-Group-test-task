import { FC, ReactNode } from 'react'
import styles from './styles.module.scss'

interface IssueColumnProps {
   title: string
   children: ReactNode
}

export const IssuesColumn: FC<IssueColumnProps> = ({ title, children }) => {
   return (
      <div>
         <h2 className={styles.column_title}>{title}</h2>
         <div className={styles.column_container}>{children}</div>
      </div>
   )
}
