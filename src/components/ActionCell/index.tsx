import React from 'react';
import { MRT_Row, MRT_TableInstance } from 'material-react-table';
import ActionButton from '@/components/ActionButton';
import { User } from '@/types/userTypes';

interface ActionButtonCellProps {
  row: MRT_Row<User>;
  table: MRT_TableInstance<User>;
}

const ActionButtonCell: React.FC<ActionButtonCellProps> = ({ row, table }) => {
  return <ActionButton row={row} table={table} />;
};

ActionButtonCell.displayName = 'ActionButtonCell';

export default ActionButtonCell;
