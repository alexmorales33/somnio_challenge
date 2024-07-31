import React from 'react';
import { MRT_Row, MRT_TableInstance } from 'material-react-table';
import ActionButton from '@/components/ActionButton';
import { User } from '@/redux/reducers/userReducer';
import { TasksList } from '@/types/taskTypes';

interface ActionButtonCellProps {
  row: MRT_Row<TasksList>;
  table: MRT_TableInstance<any>;
  buttonText: string;
}

const ActionButtonCell: React.FC<any> = ({ row, table, buttonText }) => {
  return <ActionButton row={row} table={table} buttonText={buttonText} />;
};

ActionButtonCell.displayName = 'ActionButtonCell';

export default ActionButtonCell;
