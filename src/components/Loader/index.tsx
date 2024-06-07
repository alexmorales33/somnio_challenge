import React from 'react';
import { CircularProgress } from '@mui/material';

const Loader: React.FC = () => (
  <div className="w-full h-screen flex flex-col items-center justify-center">
    <CircularProgress color="inherit" />
    <p className="mt-4">Loading...</p>
  </div>
);

export default Loader;
