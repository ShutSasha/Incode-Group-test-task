import { useContext } from 'react'
import { Context } from '../../../main'

export const defineIssueData = (columnId: string) => {
   const { store } = useContext(Context)
   let define_store: any

   switch (columnId) {
      case 'column-1':
         define_store = store.to_do_issues
         break
      case 'column-2':
         define_store = store.open_issues
         break
      case 'column-3':
         define_store = store.closed_issues
         break
      default:
         throw new Error(`Invalid columnId: ${columnId}`)
   }

   return define_store
}
