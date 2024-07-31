'use client'
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Button, TextField } from '@mui/material';
import { registerUser } from '../../../redux/actions/userActions';

export default function Register() {
  const dispatch = useAppDispatch();
  const { loading, error, user } = useAppSelector(state => state.user);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const handleRegister = () => {
    dispatch(registerUser({ username, email, password }));
  };

  useEffect(() => {
    if (user?.username) {
      console.log('User register in:', user);
    }
  }, [user]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="h-full w-full flex flex-col items-center justify-center p-4 md:p-0">
      <div className="w-full h-16 lg:w-3/4 xl:w-2/3 flex items-center justify-start">
        <p className="font-semibold text-2xl">Register</p>
      </div>
      <div className="w-full h-60 flex flex-col items-center justify-around">
        <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='w-48'
            id="outlined-basic"
            label="Username"
            variant="outlined"
        />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-48'
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-48'
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
        />
        <Button onClick={handleRegister} className='w-48' variant="contained">
          Register
        </Button>
      </div>
    </main>
  );
}
