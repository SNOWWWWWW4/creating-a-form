'use client';
import React, { useEffect, useState } from 'react';
import useAuth from '@/hooks/useAuth';
import { Check, Visibility, VisibilityOff } from '@mui/icons-material';
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
import CloseIcon from '@mui/icons-material/Close';
import { green, red } from '@mui/material/colors';

// TO BE DELETED LATER ONCE WE HAVE THE OTHER FORMS COMEPLETED AND WORRKING

const OrginalForm = () => {
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
    loginSuccess,
    setLoginSuccess,
  } = useAuth();

  const handleKeydown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const [visible, setVisible] = useState(false);
  const [visibleTwo, setVisibleTwo] = useState(false);

  const [cap, setCap] = useState(false);
  const [spec, setSpec] = useState(false);
  const [num, setNum] = useState(false);

  const handleEyeClick = () => setVisible(!visible);
  const handleEyeClickTwo = () => setVisibleTwo(!visibleTwo);

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

  const today = new Date().toISOString().split('T')[0];

  const hundredYearsAgo = new Date();
  hundredYearsAgo.setFullYear(hundredYearsAgo.getFullYear() - 100);
  const formattedHundredYearsAgo = hundredYearsAgo.toISOString().split('T')[0];

  return (
    <>
      <section className='w-full max-w-lg bg-white shadow-md rounded-lg p-2 tablet:p-6 space-y-4'>
        <FormControl fullWidth>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <TextField
              label='First Name'
              variant='outlined'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              error={!!firstNameError}
              helperText={firstNameError}
              onKeyDown={handleKeydown}
              className='col-span-2 md:col-span-1'
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
              className='col-span-2 md:col-span-1'
              required
            />
            <TextField
              variant='outlined'
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              error={!!dobError}
              helperText={dobError}
              onKeyDown={handleKeydown}
              className='col-span-2 md:col-span-1'
              type='date'
              InputProps={{
                inputProps: { min: formattedHundredYearsAgo, max: today },
              }}
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
              className='col-span-2 md:col-span-1'
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
              }}
              className='col-span-2 md:col-span-1'
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
                    className={`${password.length > 14 ? 'hidden' : ''}`}
                    sx={{ color: red[500] }}
                  />
                  <Check
                    className={`${password.length > 14 ? '' : 'hidden'}`}
                    sx={{ color: green[500] }}
                  />
                  <p
                    className={`${
                      password.length > 14 ? 'text-green-600' : 'text-red-600'
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
                    Includes one of the following special characters: !@#$%^&*
                  </p>
                </div>
              </div>
            </div>

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

export default OrginalForm;
