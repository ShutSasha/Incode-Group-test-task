import { FC, ReactNode } from 'react'
import styles from './styles.module.scss'

interface Child {
   padding?: string
   children: ReactNode
}

export const Layout: FC<Child> = ({ padding, children }) => {
   return (
      <div style={{ padding }} className={styles.layout_container}>
         {children}
      </div>
   )
}
