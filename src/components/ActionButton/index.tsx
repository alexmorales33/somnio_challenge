import React from 'react';
import Button from '@/components/Button';
import { useAppDispatch } from '@/redux/hooks';
import { MRT_Row, MRT_TableInstance } from 'material-react-table';
import { deleteTaskList } from '@/redux/actions/taskActions';
import { TasksList } from '@/types/taskTypes';
/* import { deleteUser } from '@/redux/reducers/userReducer'; */

interface ActionButtonProps {
  row: MRT_Row<TasksList>;
  table: MRT_TableInstance<TasksList>;
  buttonText: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ row, table, buttonText }) => {
  const dispatch = useAppDispatch();

  const handleActionClick = () => {
    if (buttonText === 'Eliminar') {
      console.log('delete', (row.original.id))
      dispatch(deleteTaskList(row.original.id));
    }
  };

  return (
    <Button
      text={buttonText}
      onClick={handleActionClick}
    />
  );
};

ActionButton.displayName = 'ActionButton';

export default ActionButton;
