import { differenceInDays, parseISO } from 'date-fns'

export const getHowManyDaysAgo = (created_at: string, now: Date = new Date()) => {
   const date = parseISO(created_at)
   const daysAgo = differenceInDays(now, date)

   return daysAgo
}
