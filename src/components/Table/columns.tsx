import { MRT_ColumnDef } from 'material-react-table';
import { User } from '@/types/userTypes';
import ActionButton from '../ActionButton';

export const columns: MRT_ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'username',
    header: 'Username',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    id: 'Actions',
    header: '',
    Cell: ({ row, table }) => <ActionButton row={row} table={table} />,
  },
];
