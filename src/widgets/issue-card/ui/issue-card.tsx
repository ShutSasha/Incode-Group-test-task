import { FC } from 'react'
import styles from './styles.module.scss'
import { IssueCardInfo } from '../../../shared/api'
import { getHowManyDaysAgo } from '../../../shared/lib'

interface IssueCardProps {
   issue_card_info: IssueCardInfo
}

export const IssueCard: FC<IssueCardProps> = ({ issue_card_info }) => {
   const { number, title, created_at, user_login, comments } = issue_card_info

   return (
      <div className={styles.card_container}>
         <div className={styles.card_inner}>
            <div className={styles.card_title}>{title}</div>
            <div className={styles.date}>{`#${number} opened ${getHowManyDaysAgo(created_at)} days ago`}</div>
            <div className={styles.user_and_comments}>{`${user_login} | Comments: ${comments}`}</div>
         </div>
      </div>
   )
}
