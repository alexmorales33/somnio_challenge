// components/CustomTable.tsx
import React from 'react'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import { MRT_Localization_ES } from 'material-react-table/locales/es'
import { User } from '@/types/userTypes'
import { columns } from '@/components/Table/columns'

interface CustomTableProps {
  data: User[]
  columns: any
}

const CustomTable: React.FC<CustomTableProps> = ({ data, columns }) => {
  const tableInstance = useMaterialReactTable({
    columns,
    data,
    initialState: { pagination: { pageSize: 7, pageIndex: 0 }, globalFilter: '', showGlobalFilter: true,},
    enablePagination: true,
    enableColumnResizing: true,
    columnFilterModeOptions: null,
    enableColumnActions: false,
    enableColumnDragging: false,
    enableColumnFilterModes: false,
    enableMultiSort: false,
    enableSorting: false,
    enableColumnOrdering: false,
    paginationDisplayMode: 'pages',
    enableGlobalFilter: true,
    enableFilterMatchHighlighting: true,
    positionGlobalFilter: 'left',
    muiSearchTextFieldProps: {
      placeholder: 'Search users...',
      autoFocus: true,
    },
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 20],
    },
    muiTablePaperProps: {
      sx: {
        boxShadow: '0',
      },
    },
    muiTableContainerProps: {
      sx: {
        border: '1px solid #e5e7eb',
        borderRadius: '10px',
        paddingBottom: '5px',
        marginBottom: '10px',
      },
    },
    muiBottomToolbarProps: {
      sx: {
        border: '1px solid #e5e7eb',
        borderRadius: '10px',
        boxShadow: '0',
      },
    },
  })

  return (
    <div className="overflow-x-auto w-full">
      <MaterialReactTable table={tableInstance} />
    </div>
  )
}

export default CustomTable
