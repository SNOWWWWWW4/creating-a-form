'use client'
import React, { useEffect, useState } from 'react';
import useResetPassword from '@/hooks/useResetPassword';
import { useRouter } from 'next/navigation';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { Check, Visibility, VisibilityOff } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { green, red } from '@mui/material/colors';

function page() {

  const {
    email,
    setEmail,
    oldPassword,
    setOldPassword,
    newPassword,
    setNewPassword,
    confirmNewPassword,
    setConfirmNewPassword,
    emailError,
    oldPasswordError,
    newPasswordError,
    confirmNewPasswordError,
    handleContinue,
    handleResetPassword,
    resetFields,
    switchBoolTwo,
    setSwitchBoolTwo,
    successfulPasswordReset,
    setSuccessfulPasswordReset,
  } = useResetPassword();

  const router = useRouter();
  const handleGoBack = () => {
    router.push('/');
  };

  const [visible, setVisible] = useState<boolean>(false);
  const [visibleTwo, setVisibleTwo] = useState<boolean>(false);

  const handleEyeClick = () => {
    setVisible(!visible);
  };
  const handleEyeClickTwo = () => {
    setVisibleTwo(!visibleTwo);
  };

  const handleKeydown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleResetPassword();
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccessfulPasswordReset(false);
  };

  const [cap, setCap] = useState(false);
  const [spec, setSpec] = useState(false);
  const [num, setNum] = useState(false);

  useEffect(() => {
    const caps = /[A-Z]/;
    if (caps.test(newPassword)) {
      setCap(true);
    } else {
      setCap(false);
    }
  }, [newPassword]);

  useEffect(() => {
    const nums = /[0-9]/;
    if (nums.test(newPassword)) {
      setNum(true);
    } else {
      setNum(false);
    }
  }, [newPassword]);

  useEffect(() => {
    const specials = /[?@#!$%^&*]/;
    if (specials.test(newPassword)) {
      setSpec(true);
    } else {
      setSpec(false);
    }
  }, [newPassword]);


  return (
    <div className='min-h-screen grid grid-cols-1 computer:grid-cols-2'>
      <div className='flex flex-col items-center justify-center'>
        {switchBoolTwo ? (
          <div className='w-full max-w-lg bg-white shadow-md rounded-lg p-2 tablet:p-6 space-y-4'>
            <FormControl>
              <div className='grid grid-cols-1 gap-4 justify-center'>
                <TextField
                  label='Password'
                  variant='outlined'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  error={!!newPasswordError}
                  helperText={newPasswordError}
                  fullWidth
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
                  }}
                  required
                />
                <TextField
                  label='Confirm Password'
                  variant='outlined'
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  error={!!confirmNewPasswordError}
                  helperText={confirmNewPasswordError}
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
                  }}
                  required
                />

                {/* password requirements */}
                <div className='col-span-2'>
                  <Typography variant='body1' className='font-medium mb-2'>
                    Password Requirements
                  </Typography>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <div className='flex'>
                      <CloseIcon
                        className={`${newPassword.length > 14 ? 'hidden' : ''}`}
                        sx={{ color: red[500] }}
                      />
                      <Check
                        className={`${newPassword.length > 14 ? '' : 'hidden'}`}
                        sx={{ color: green[500] }}
                      />
                      <p
                        className={`${
                          newPassword.length > 14
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
                        className={`${
                          cap ? 'text-green-600' : 'text-red-600'
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
                        className={`${
                          num ? 'text-green-600' : 'text-red-600'
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
                        className={`${
                          spec ? 'text-green-600' : 'text-red-600'
                        } text-xs my-auto`}
                      >
                        Includes one of the following special characters:
                        !@#$%^&*
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FormControl>
          </div>
        ) : (
          <div className='w-full max-w-lg bg-white shadow-md rounded-lg p-2 tablet:p-6 space-y-4'>
            <FormControl>
              <div className='grid grid-cols-1 gap-4 justify-center'>
                <TextField
                  label='Email'
                  variant='outlined'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!emailError}
                  helperText={emailError}
                  onKeyDown={handleKeydown}
                  required
                />
                <TextField
                  label='Old Password'
                  variant='outlined'
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  error={!!oldPasswordError}
                  helperText={oldPasswordError}
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
                  }}
                  required
                />
                <Button variant='contained' onClick={handleContinue}>
                  Continue
                </Button>
              </div>
            </FormControl>
            <div className='flex-group mt-4'>
              <h1>Go back?</h1>
              <Button variant='text' color='primary' onClick={handleGoBack}>
                Return to Login
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className='flex flex-col justify-center items-center'>
        <h1>Hello there</h1>
      </div>
    </div>
  );
}

export default page
