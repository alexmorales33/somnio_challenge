import { TasksList } from '@/types/taskTypes';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTaskLists = createAsyncThunk<TasksList[]>(
  'taskLists/fetchAll',
  async () => {
    const response = await axios.get<TasksList[]>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/task_lists/`
    );
    console.log('Task Lists:', response.data);
    return response.data;
  }
);

export const deleteTaskList = createAsyncThunk<string, string>(
  'task_lists/taskId',
  async (taskId) => {
    console.log(taskId)
    await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/task_lists/${taskId}`);
    return taskId;
  }
);
