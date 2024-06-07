import React from 'react';
import Button from '@/components/Button';
import { User } from '@/types/userTypes';
import { useAppDispatch } from '@/redux/hooks';
import { MRT_Row, MRT_TableInstance } from 'material-react-table';
import { deleteUser } from '@/redux/reducers/userReducer';

interface ActionButtonProps {
  row: MRT_Row<User>;
  table: MRT_TableInstance<User>;
}

const ActionButton: React.FC<ActionButtonProps> = ({ row, table }) => {
  const dispatch = useAppDispatch();

  const handleActionClick = () => {
    dispatch(deleteUser(row.original.id));
  };

  return (
    <Button
      text="Delete"
      onClick={handleActionClick}
    />
  );
};

ActionButton.displayName = 'ActionButton';

export default ActionButton;
