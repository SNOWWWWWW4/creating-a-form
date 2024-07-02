'use client'
import React, { useState, useEffect } from 'react'
import useLogin from '@/hooks/useLogin';
import { Check, Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Alert,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { green, red } from '@mui/material/colors';

export default function Home() {

  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
    switchBool,
    setSwitchBool,
    loginSuccess,
    setLoginSuccess,
    createAccSuccess,
    setCreateAccSuccess,
    emailError,
    passwordError,
    handleSubmit,
    changePassword
  } = useLogin();

  const [cap, setCap] = useState(false);
  const [spec, setSpec] = useState(false);
  const [num, setNum] = useState(false);

  const [visible, setVisible] = useState(false);
  const [visibleTwo, setVisibleTwo] = useState(false);
  const handleEyeClick = () => setVisible(!visible);
  const handleEyeClickTwo = () => setVisibleTwo(!visibleTwo);


  const handleKeydown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setLoginSuccess(false);
  };
  const handleCloseTwo = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setCreateAccSuccess(false);
  };

  useEffect(() => {
    const caps = /[A-Z]/;
    if (caps.test(password)) {
      setCap(true);
    } else {
      setCap(false);
    }
  }, [password]);

  useEffect(() => {
    const nums = /[0-9]/;
    if (nums.test(password)) {
      setNum(true);
    } else {
      setNum(false);
    }
  }, [password]);

  useEffect(() => {
    const specials = /[?@#!$%^&*]/;
    if (specials.test(password)) {
      setSpec(true);
    } else {
      setSpec(false);
    }
  }, [password]);

  return (
    <main className='min-h-screen bg-mainBg bg-cover grid grid-cols-1 computer:grid-cols-2 justify-between p-4 mobile:p-10 tablet:p-24'>
      <section className='flex flex-col justify-center items-center'>
        <img className='w-96' src='/moon.png' />
      </section>
      <section className='flex flex-col justify-center items-center'>
        {switchBool ? (
          <div className='w-full max-w-lg border-8 border-purple-200 bg-white shadow-md rounded-lg p-2 tablet:p-6 space-y-4'>
            <h1 className='font-mainFont font-bold text-2xl'>Student Directory</h1>
            <h4 className='mt-5 font-mainFont'>Create an Account</h4>
            <FormControl>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <TextField
                  label='Email'
                  variant='outlined'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!emailError}
                  helperText={emailError}
                  onKeyDown={handleKeydown}
                  className='col-span-2'
                  required
                  InputProps={{
                    className: 'font-mainFont'
                  }}
                  InputLabelProps={{
                    className: 'font-mainFont'
                  }}
                />
                <TextField
                  label='Password'
                  variant='outlined'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!passwordError}
                  helperText={passwordError}
                  onKeyDown={handleKeydown}
                  type={visible ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={handleEyeClick}>
                          {visible ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                    className: 'font-mainFont'
                  }}
                  InputLabelProps={{
                    className: 'font-mainFont'
                  }}
                  className='col-span-2 md:col-span-1'
                  required
                />
                <TextField
                  label='Confirm Password'
                  variant='outlined'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={!!confirmPasswordError}
                  helperText={confirmPasswordError}
                  onKeyDown={handleKeydown}
                  type={visibleTwo ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={handleEyeClickTwo}>
                          {visibleTwo ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                    className: 'font-mainFont'
                  }}
                  InputLabelProps={{
                    className: 'font-mainFont'
                  }}
                  className='col-span-2 md:col-span-1'
                  required
                />

                {/* password requirements */}
                <div className='col-span-2'>
                  <Typography variant='body1' className='font-medium font-mainFont mb-2'>
                    Password Requirements
                  </Typography>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <div className='flex'>
                      <CloseIcon
                        className={`${password.length > 14 ? 'hidden' : ''}`}
                        sx={{ color: red[500] }}
                      />
                      <Check
                        className={`${password.length > 14 ? '' : 'hidden'}`}
                        sx={{ color: green[500] }}
                      />
                      <p
                        className={`${password.length > 14
                            ? 'text-green-600'
                            : 'text-red-600'
                          } text-xs my-auto`}
                      >
                        15 or more Characters long
                      </p>
                    </div>
                    <div className='flex'>
                      <CloseIcon
                        className={`${cap ? 'hidden' : ''}`}
                        sx={{ color: red[500] }}
                      />
                      <Check
                        className={`${cap ? '' : 'hidden'}`}
                        sx={{ color: green[500] }}
                      />
                      <p
                        className={`${cap ? 'text-green-600' : 'text-red-600'
                          } text-xs my-auto`}
                      >
                        Contains an uppercase letter
                      </p>
                    </div>
                    <div className='flex'>
                      <CloseIcon
                        className={`${num ? 'hidden' : ''}`}
                        sx={{ color: red[500] }}
                      />
                      <Check
                        className={`${num ? '' : 'hidden'}`}
                        sx={{ color: green[500] }}
                      />
                      <p
                        className={`${num ? 'text-green-600' : 'text-red-600'
                          } text-xs my-auto`}
                      >
                        Contains a number
                      </p>
                    </div>
                    <div className='flex'>
                      <CloseIcon
                        className={`${spec ? 'hidden' : ''}`}
                        sx={{ color: red[500] }}
                      />
                      <Check
                        className={`${spec ? '' : 'hidden'}`}
                        sx={{ color: green[500] }}
                      />
                      <p
                        className={`${spec ? 'text-green-600' : 'text-red-600'
                          } text-xs my-auto`}
                      >
                        Includes one of the following special characters:
                        !@#$%^&*
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleSubmit}
                  variant='contained'
                  size='large'
                  className='col-span-2 font-mainFont justify-center'
                >
                  Submit
                </Button>

                <h1 className='font-mainFont'>Already have an account?</h1>

                <Button
                  variant='text'
                  color='primary'
                  className='underline font-mainFont mini:ml-auto'
                  onClick={() => setSwitchBool(false)}
                >
                  Sign in
                </Button>

              </div>
            </FormControl>
          </div>
        ) : (
          <div className='font-mainFont w-full max-w-lg bg-white shadow-md rounded-2xl p-2 tablet:p-6 space-y-4 border-8 border-purple-200'>
            <h1 className='text-2xl font-bold'>Student Directory</h1>
            <h4 className='mt-5'>Login</h4>
            <FormControl className='grid grid-cols-1'>
              <div className='grid grid-cols-1 tablet:grid-cols-2 gap-4'>
                <TextField
                  label='Email'
                  variant='outlined'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!emailError}
                  helperText={emailError}
                  onKeyDown={handleKeydown}
                  className='col-span-2'
                  required
                  InputProps={{
                    className: 'font-mainFont'
                  }}
                  InputLabelProps={{
                    className: 'font-mainFont'
                  }}
                />
                <TextField
                  label='Password'
                  variant='outlined'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!passwordError}
                  helperText={passwordError}
                  onKeyDown={handleKeydown}
                  type={visible ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={handleEyeClick}>
                          {visible ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                    className: 'font-mainFont'
                  }}
                  InputLabelProps={{
                    className: 'font-mainFont'
                  }}
                  className='col-span-2'
                  required
                />

                <Button
                  onClick={handleSubmit}
                  variant='contained'
                  size='large'
                  className='col-span-2 font-mainFont justify-center'
                >
                  Login
                </Button>

                <Stack
                  direction='row'
                  className='mt-2 flex justify-center items-center col-span-2'
                >
                  <div className='flex-grow border-t border-gray-400'></div>
                  <h1 className='mx-2'>Or</h1>
                  <div className='flex-grow border-t border-gray-400'></div>
                </Stack>

                <Button
                  variant='outlined'
                  color='secondary'
                  className='col-span-2 font-mainFont'
                >
                  Admin
                </Button>
                <div className='col-span-2'>
                  <div className='mt-5 flex-group'>
                    <h1 className=''>Are you new?</h1>
                    <Button
                      variant='text'
                      color='info'
                      className='underline font-mainFont mini:ml-auto'
                      onClick={() => setSwitchBool(true)}
                    >
                      Create an Account
                    </Button>
                  </div>
                  <div className='flex-group'>
                    <h1>Reset Password?</h1>
                    <Button
                      variant='text'
                      className='mini:ml-auto underline font-mainFont'
                      onClick={changePassword}
                    >
                      Change
                    </Button>
                  </div>
                </div>
              </div>
            </FormControl>
          </div>
        )}
      </section>

      <Snackbar
        open={loginSuccess}
        autoHideDuration={3500}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleClose}
          severity='success'
          variant='filled'
          sx={{ width: '100%' }}
          className='font-mainFont'
        >
          Welcome! Loading next page...
        </Alert>
      </Snackbar>

      <Snackbar
        open={createAccSuccess}
        autoHideDuration={3500}
        onClose={handleCloseTwo}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleClose}
          severity='success'
          variant='filled'
          sx={{ width: '100%' }}
          className='font-mainFont'
        >
          Account successfully created!
        </Alert>
      </Snackbar>
    </main>
  );
}