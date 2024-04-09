import { FC } from 'react'
import styles from './styles.module.scss'
import { LinkTo } from '../../../entities'
import StarIcon from '../assets/star-icon.png'
import { formatNumber } from '../../../app/helpers/formatNumber'

interface RepoInfoProps {
   owner_name: string
   owner_url: string
   repo_name: string
   repo_url: string
   stargazers_count: number
}

export const RepoInfo: FC<RepoInfoProps> = ({ owner_name, owner_url, repo_name, repo_url, stargazers_count }) => {
   return (
      <div className={styles.repo_info_container}>
         <div className={styles.repo_links_list}>
            <LinkTo style={{ color: '#4159cc', fontSize: '20px' }} text={owner_name} link={owner_url} />
            <LinkTo style={{ color: '#4159cc', fontSize: '20px' }} text={repo_name} link={repo_url} />
         </div>
         {stargazers_count && stargazers_count !== 0 ? (
            <div className={styles.repo_stars_container}>
               <img className={styles.star_icon} src={StarIcon} alt='star icon' />
               <p>{formatNumber(stargazers_count)}</p>
            </div>
         ) : (
            <p className={styles.repo_info_container}>This repo hasn't stars</p>
         )}
      </div>
   )
}
