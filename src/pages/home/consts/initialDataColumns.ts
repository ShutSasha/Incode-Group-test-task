type ColumnType = {
   id: string
   title: string
}

type InitialDataColumnsType = {
   columns: Record<string, ColumnType>
   columnOrder: string[]
}

export let initialDataColums: InitialDataColumnsType = {
   columns: {
      'column-1': {
         id: 'column-1',
         title: 'ToDo',
      },
      'column-2': {
         id: 'column-2',
         title: 'In Progress',
      },
      'column-3': {
         id: 'column-3',
         title: 'Done',
      },
   },
   columnOrder: ['column-1', 'column-2', 'column-3'],
}
