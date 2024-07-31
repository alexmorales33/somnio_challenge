import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteTaskList, fetchTaskLists } from '../actions/taskActions';
import { TasksList } from '@/types/taskTypes';

interface TaskListState {
  taskLists: {
    title: string;
    description: string;
    id: string;
    owner_id: string;
  }[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskListState = {
  taskLists: [],
  loading: false,
  error: null,
};

const taskListSlice = createSlice({
  name: 'taskLists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTaskLists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTaskLists.fulfilled, (state, action: PayloadAction<TasksList[]>) => {
        state.loading = false;
        state.taskLists = action.payload;
      })
      .addCase(fetchTaskLists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch task lists';
      })
      .addCase(deleteTaskList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTaskList.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.taskLists = state.taskLists.filter(taskList => taskList.id !== action.payload);
      })
      .addCase(deleteTaskList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete task list';
      });
  },
});

export default taskListSlice.reducer;
