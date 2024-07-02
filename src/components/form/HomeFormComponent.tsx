'use client';
import React, { useState } from 'react';
import useFormValidation from '@/hooks/useFormValidation';
import {
  Alert,
  Button,
  FormControl,
  Snackbar,
  TextField,
} from '@mui/material';

const HomeFormComponent = () => {
  
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    dob,
    setDob,
    address,
    setAddress,
    phone,
    setPhone,
    firstNameError,
    lastNameError,
    emailError,
    dobError,
    addressError,
    phoneError,
    formSuccessful,
    setFormSuccessful,
    handleSubmit,
    resetFields
  } = useFormValidation()

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
    setFormSuccessful(false);
  };

  const today = new Date().toISOString().split('T')[0];

  const hundredYearsAgo = new Date();
  hundredYearsAgo.setFullYear(hundredYearsAgo.getFullYear() - 100);
  const formattedHundredYearsAgo = hundredYearsAgo.toISOString().split('T')[0];

  return (
    <>
      <div className='w-full bg-studentDirect border-8 border-[#83677e] shadow-md rounded-lg py-8 px-10 lg:py-14 lg:px-16 space-y-4'>
        <FormControl fullWidth>
          <div className='grid grid-cols-2 gap-4'>
            <TextField
              label='First Name'
              variant='outlined'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              error={!!firstNameError}
              helperText={firstNameError}
              onKeyDown={handleKeydown}
              className='col-span-2 sm:col-span-1'
              required
              InputProps={{
                className: 'font-mainFont'
              }}
              InputLabelProps={{
                className: 'font-mainFont'
              }}
            />
            <TextField
              label='Last Name'
              variant='outlined'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              error={!!lastNameError}
              helperText={lastNameError}
              onKeyDown={handleKeydown}
              className='col-span-2 sm:col-span-1'
              required
              InputProps={{
                className: 'font-mainFont'
              }}
              InputLabelProps={{
                className: 'font-mainFont'
              }}
            />
            <TextField
              
              variant='outlined'
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              error={!!dobError}
              helperText={dobError}
              onKeyDown={handleKeydown}
              className='col-span-2 sm:col-span-1'
              type='date'
              InputProps={{
                inputProps: { min: formattedHundredYearsAgo, max: today },
                className: 'font-mainFont'
              }}
              InputLabelProps={{
                className: 'font-mainFont'
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
              className='col-span-2 sm:col-span-1'
              InputProps={{
                className: 'font-mainFont'
              }}
              InputLabelProps={{
                className: 'font-mainFont'
              }}
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
              InputProps={{
                className: 'font-mainFont'
              }}
              InputLabelProps={{
                className: 'font-mainFont'
              }}
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
              InputProps={{
                className: 'font-mainFont'
              }}
              InputLabelProps={{
                className: 'font-mainFont'
              }}
            />

            <Button
              onClick={handleSubmit}
              variant='contained'
              size='large'
              className='col-span-2 font-mainFont justify-center'
            >
              Submit
            </Button>
          </div>
        </FormControl>
      </div>
      <Snackbar
        open={formSuccessful}
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

export default HomeFormComponent;
