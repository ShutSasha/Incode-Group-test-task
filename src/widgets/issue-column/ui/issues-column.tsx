import { FC } from 'react'
import styles from './styles.module.scss'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { IssueCard } from '../../issue-card'
import { IssueCardInfo } from '../../../shared/api'
import { observer } from 'mobx-react-lite'

interface IssueColumnProps {
   list_issues: any
   column_id: string
   title: string
}

export const IssuesColumn: FC<IssueColumnProps> = observer(({ list_issues, column_id, title }) => {
   return (
      <div>
         <h2 className={styles.column_title}>{title}</h2>
         <Droppable droppableId={column_id}>
            {(provided) => (
               <div className={styles.column_container} ref={provided.innerRef} {...provided.droppableProps}>
                  {list_issues &&
                     list_issues.map((issue_card: IssueCardInfo, index: number) => (
                        <Draggable key={issue_card.id} draggableId={`${issue_card.id}`} index={index}>
                           {(provided) => (
                              <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                 <IssueCard issue_card_info={issue_card} />
                              </div>
                           )}
                        </Draggable>
                     ))}
                  {provided.placeholder}
               </div>
            )}
         </Droppable>
      </div>
   )
})
