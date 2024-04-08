import { FC } from 'react'
import { SearchRepo } from '../../../widgets'
import { Layout } from '../../../shared'

export const Home: FC = () => {
   return (
      <Layout>
         <SearchRepo />
         <div>columns</div>
      </Layout>
   )
}
