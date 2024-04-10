import { FC, useContext } from 'react'
import { IssueColumnList, IssuesColumn, SearchRepo } from '../../../widgets'
import { Layout } from '../../../shared'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../main'
import { DragDropContext } from 'react-beautiful-dnd'
import { initialDataColums } from '../consts/initialDataColumns'

export const Home: FC = observer(() => {
   const { store } = useContext(Context)

   const onDragEnd = (result: any) => {
      const { source, destination } = result

      if (!destination) return

      if (source.droppableId === destination.droppableId && source.index === destination.index) return

      if (source.droppableId === destination.droppableId) {
         return store.setDraggableIssue(result.source.index, result.destination.index, result.source.droppableId)
      }
   }

   return (
      <Layout padding='20px 10px'>
         <SearchRepo />
         <IssueColumnList style={{ marginTop: '20px' }}>
            <DragDropContext onDragEnd={onDragEnd}>
               <IssuesColumn
                  list_issues={store.to_do_issues}
                  column_id={initialDataColums.columns['column-1'].id}
                  title='ToDo'
               />
               <IssuesColumn
                  list_issues={store.open_issues}
                  column_id={initialDataColums.columns['column-2'].id}
                  title='In Progress'
               />
               <IssuesColumn
                  list_issues={store.closed_issues}
                  column_id={initialDataColums.columns['column-3'].id}
                  title='Done'
               />
            </DragDropContext>
         </IssueColumnList>
      </Layout>
   )
})
