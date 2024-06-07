'use client'

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getAllUsers } from "@/redux/actions/userActions";
import { columns } from "@/components/Table/columns";
import CustomTable from "@/components/Table";
import Loader from '@/components/Loader';

export default function Home() {
  const dispatch = useAppDispatch()
  const { allUsers, loading, error } = useAppSelector(state => state.user)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  useEffect(() => {
    if (!loading && !error) {
    }
  }, [allUsers, loading, error])

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>

  return (
    <main className="h-full w-full flex flex-col items-center justify-center p-4 md:p-0">
      <div className="w-full h-16 lg:w-3/4 xl:w-2/3 flex items-center justify-start">
        <p className="font-semibold text-2xl">
          Users
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full lg:w-3/4 xl:w-2/3">
          <CustomTable columns={columns} data={allUsers} />
        </div>
      </div>
    </main>
  );
}
