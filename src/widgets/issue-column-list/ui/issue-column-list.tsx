import { CSSProperties, FC, ReactNode } from 'react'
import styles from './styles.module.scss'

interface IssueColumnListProps {
   children: ReactNode
   style?: CSSProperties
}

export const IssueColumnList: FC<IssueColumnListProps> = ({ children, style }) => {
   return (
      <div style={{ ...style }} className={styles.column_list}>
         {children}
      </div>
   )
}
