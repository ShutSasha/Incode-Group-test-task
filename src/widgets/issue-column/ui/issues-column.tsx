import { FC } from 'react'
import styles from './styles.module.scss'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { IssueCard } from '../../issue-card'
import { IssueCardInfo } from '../../../shared/api'
import styled from 'styled-components'

interface IssueColumnProps {
   list_issues: any
   column_id: string
   title: string
}

const ColumnContainer = styled.div`
   padding: 15px 20px;
   background-color: #ced4da;
   height: 80vh;
   border-radius: 8px;
   overflow-y: auto;
   -ms-overflow-style: none; /* Hide scrollline in IE and Edge */

   /* Hide scrollline in Chrome and Safari */
   &::-webkit-scrollbar {
      display: none;
   }

   /* Hide scrollline in Firefox */
   scrollbar-width: none; /* Скрыть полосу прокрутки в Firefox */

   scrollbar-width: thin;
   scrollbar-color: transparent transparent;
`
export const IssuesColumn: FC<IssueColumnProps> = ({ list_issues, column_id, title }) => {
   return (
      <div>
         <h2 className={styles.column_title}>{title}</h2>
         <Droppable droppableId={column_id}>
            {(provided) => (
               <ColumnContainer ref={provided.innerRef} {...provided.droppableProps}>
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
               </ColumnContainer>
            )}
         </Droppable>
      </div>
   )
}
