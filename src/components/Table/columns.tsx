import { MRT_ColumnDef } from 'material-react-table';
import { User } from '@/types/userTypes';
import ActionButtonCell from '../ActionCell';

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
    id: 'actions',
    header: '',
    Cell: ActionButtonCell,
  },
];
