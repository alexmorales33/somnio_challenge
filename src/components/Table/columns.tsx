import { MRT_ColumnDef } from 'material-react-table';
import ActionButtonCell from '../ActionCell';

export const columns: MRT_ColumnDef<any>[] = [
  {
    accessorKey: 'title',
    header: 'Titulo',
  },
  {
    accessorKey: 'description',
    header: 'Descripcion',
  },
  {
    id: 'actionsDelete',
    header: '',
    Cell: (props) => <ActionButtonCell {...props} buttonText="Eliminar" />,
  },
  {
    id: 'actionsEdit',
    header: '',
    Cell: (props) => <ActionButtonCell {...props} buttonText="Editar" />,
  },
  {
    id: 'actionsDetail',
    header: '',
    Cell: (props) => <ActionButtonCell {...props} buttonText="Ver Detalle" />,
  },
  {
    id: 'actionsTask',
    header: '',
    Cell: (props) => <ActionButtonCell {...props} buttonText="Agregar Tarea" />,
  },
];
