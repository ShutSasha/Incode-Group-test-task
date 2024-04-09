import { FC, useContext } from 'react'
import { IssueCard, IssueColumnList, IssuesColumn, SearchRepo } from '../../../widgets'
import { Layout } from '../../../shared'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../main'
import { IssueCardInfo } from '../../../shared/api'

export const Home: FC = observer(() => {
   const { store } = useContext(Context)

   return (
      <Layout padding='20px 10px'>
         <SearchRepo />
         <IssueColumnList style={{ marginTop: '20px' }}>
            <IssuesColumn title='ToDo'>
               {store.to_do_issues &&
                  store.to_do_issues.map((issue_card: IssueCardInfo) => (
                     <IssueCard key={issue_card.id} issue_card_info={issue_card} />
                  ))}
            </IssuesColumn>
            <IssuesColumn title='In Progress'>
               {store.open_issues &&
                  store.open_issues.map((issue_card: IssueCardInfo) => (
                     <IssueCard key={issue_card.id} issue_card_info={issue_card} />
                  ))}
            </IssuesColumn>
            <IssuesColumn title='Done'>
               {store.closed_issues &&
                  store.closed_issues.map((issue_card: IssueCardInfo) => (
                     <IssueCard key={issue_card.id} issue_card_info={issue_card} />
                  ))}
            </IssuesColumn>
         </IssueColumnList>
      </Layout>
   )
})
