import { differenceInDays, parseISO } from 'date-fns'

export const getHowManyDaysAgo = (created_at: string) => {
   const date = parseISO(created_at)
   const now = new Date()
   const daysAgo = differenceInDays(now, date)

   return daysAgo
}
