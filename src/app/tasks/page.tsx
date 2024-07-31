'use client'

import { useEffect } from 'react';
import { columns } from "@/components/Table/columns";
import CustomTable from "@/components/Table";
import Loader from '@/components/Loader';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchTaskLists } from '@/redux/actions/taskActions';

export default function Tasks() {
  const dispatch = useAppDispatch();
  const { taskLists, loading, error } = useAppSelector(state => state.taskLists);

  useEffect(() => {
    dispatch(fetchTaskLists());
    console.log(taskLists)
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <main className="h-full w-full flex flex-col items-center justify-center p-4 md:p-0">
      <div className="w-full h-16 lg:w-3/4 xl:w-2/3 flex items-center justify-start">
        <p className="font-semibold text-2xl">
          Tasks
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full lg:w-3/4 xl:w-2/3">
          <CustomTable columns={columns} data={taskLists} />
        </div>
      </div>
    </main>
  );
}
