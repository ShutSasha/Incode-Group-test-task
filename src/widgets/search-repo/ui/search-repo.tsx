import { FC } from 'react'
import { LoadIssues } from '../../../features'

export const SearchRepo: FC = () => {
   return (
      <>
         <LoadIssues />
         <div>entities</div>
      </>
   )
}
