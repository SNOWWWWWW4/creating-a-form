'use client';
import React, { useEffect, useState } from 'react';
import useAuth from '@/hooks/useAuth';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Alert,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';

const FormField = () => {
  const {
    firstName,
    setFirstName,
    firstNameError,
    lastName,
    setLastName,
    lastNameError,
    email,
    setEmail,
    emailError,
    dob,
    setDob,
    dobError,
    address,
    setAddress,
    addressError,
    phone,
    setPhone,
    phoneError,
    password,
    setPassword,
    passwordError,
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
    handleSubmit,
    passwordStrength,
    validatingPasswordStrength,
    loginSuccess,
    setLoginSuccess,
  } = useAuth();

  const handleKeydown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const [visible, setVisible] = useState(false);
  const [visibleTwo, setVisibleTwo] = useState(false);

  const handleEyeClick = () => {
    setVisible(!visible);
  };

  const handleEyeClickTwo = () => {
    setVisibleTwo(!visibleTwo);
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

  useEffect(() => {
    if(password) {
      validatingPasswordStrength();
    }
  }, [password]);

  
  return (
    <>
      <section className='w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4 space-x-2'>
        <FormControl fullWidth>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 '>
            <TextField
              label='First Name'
              variant='outlined'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              error={!!firstNameError}
              helperText={firstNameError}
              onKeyDown={handleKeydown}
              required
            />
            <TextField
              label='Last Name'
              variant='outlined'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              error={!!lastNameError}
              helperText={lastNameError}
              onKeyDown={handleKeydown}
              required
            />
            <TextField
              variant='outlined'
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              error={!!dobError}
              helperText={dobError}
              onKeyDown={handleKeydown}
              type='date'
              required
            />
            <TextField
              label='Phone Number'
              variant='outlined'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={!!phoneError}
              helperText={phoneError}
              onKeyDown={handleKeydown}
            />
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
            />
            <TextField
              label='Address'
              variant='outlined'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              error={!!addressError}
              helperText={addressError}
              onKeyDown={handleKeydown}
              className='col-span-2'
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
              }}
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
              }}
              required
            />
            {password && (
              <Typography className='col-span-2'>
                Password Strength = {passwordStrength}
              </Typography>
            )}
            <Button
              onClick={handleSubmit}
              variant='contained'
              size='large'
              className='col-span-2 justify-center'
            >
              Submit
            </Button>
          </div>
        </FormControl>
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
        >
          Successfully Submitted. Loading...
        </Alert>
      </Snackbar>
    </>
  );
};

export default FormField;
