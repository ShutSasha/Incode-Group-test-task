import { FC, ReactNode } from 'react'
import styles from './styles.module.scss'

interface Child {
   children: ReactNode
}

export const Layout: FC<Child> = ({ children }) => {
   return <div className={styles.layout_container}>{children}</div>
}
