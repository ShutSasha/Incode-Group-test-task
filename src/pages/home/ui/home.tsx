import { FC, useContext, useEffect } from 'react'
import { IssueColumnList, IssuesColumn, SearchRepo } from '../../../widgets'
import { Layout } from '../../../shared'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../main'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { defineIssueData } from '../helpers/define-issues-data'

export const Home: FC = observer(() => {
   const { store } = useContext(Context)

   const onDragEnd = (result: any) => {
      const { source, destination, type } = result
      if (!destination) return

      if (source.droppableId === destination.droppableId && source.index === destination.index) return

      if (source.droppableId === destination.droppableId && type === 'DEFAULT') {
         return store.setDraggableIssue(result.source.index, result.destination.index, result.source.droppableId)
      }

      if (source.droppableId === destination.droppableId && type === 'column') {
         store.setDraggableColumn(result.source.index, result.destination.index)
      }
   }

   useEffect(() => {}, [store.closed_issues, store.open_issues, store.to_do_issues])

   return (
      <Layout padding='20px 10px'>
         <SearchRepo />
         <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='all-columns' direction='horizontal' type='column'>
               {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                     <IssueColumnList style={{ marginTop: '20px' }}>
                        {store.column_initial_state &&
                           store.column_initial_state.columnOrder.map((columnId, index) => (
                              <Draggable key={columnId} draggableId={columnId} index={index}>
                                 {(provided) => (
                                    <div
                                       ref={provided.innerRef}
                                       {...provided.draggableProps}
                                       {...provided.dragHandleProps}
                                    >
                                       <IssuesColumn
                                          list_issues={defineIssueData(columnId)}
                                          column_id={columnId}
                                          title={store.column_initial_state.columns[columnId].title}
                                       />
                                    </div>
                                 )}
                              </Draggable>
                           ))}
                     </IssueColumnList>
                     {provided.placeholder}
                  </div>
               )}
            </Droppable>
         </DragDropContext>
      </Layout>
   )
})
