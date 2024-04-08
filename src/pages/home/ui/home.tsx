import { FC } from 'react'
import { SearchRepo } from '../../../widgets'
import { Layout } from '../../../shared'

export const Home: FC = () => {
   return (
      <Layout padding='20px 10px'>
         <SearchRepo />
         <div>columns</div>
      </Layout>
   )
}
