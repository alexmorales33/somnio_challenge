import { MRT_ColumnDef } from 'material-react-table';
import { User } from '@/types/userTypes';

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
    size: 200,
  },
];
