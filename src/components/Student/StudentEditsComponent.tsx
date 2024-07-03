'use client';
import React, { useEffect } from 'react';
import useFormValidation from '@/hooks/useFormValidation';
import {
  Alert,
  Button,
  FormControl,
  Snackbar,
  TextField,
} from '@mui/material';
import { getAllStudents, updateStudent } from '@/utils/DataServices';
import { IStudent } from '@/Interfaces/Interfaces';
import useFormTypeChecks from '@/hooks/useFormTypeChecks';

type StudentTableProps = {
  idSelect: number;
  setIsEdit: (input: boolean) => void;
  handleUpdateData: (input: IStudent) => void;
  setIdSelect: (input: number | undefined) => void;
}

const StudentEditsComponent = ({ setIsEdit, handleUpdateData, idSelect, setIdSelect }: StudentTableProps) => {
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
    validatingInputs,
    formSuccessful,
    setFormSuccessful
  } = useFormTypeChecks();

  useEffect(() => {
    const getPerson = async () => {
      let studentsArr = await getAllStudents();
      const getStudent: IStudent[] = studentsArr.filter(user => user.id == idSelect);

      setFirstName(getStudent[0].first)
      setLastName(getStudent[0].last)
      setDob(getStudent[0].doB.split("T")[0])
      setEmail(getStudent[0].email)
      if (getStudent[0].address !== null) {
        setAddress(getStudent[0].address)
      }
      if (getStudent[0].phone !== null) {
        setPhone(getStudent[0].phone)
      }
    }

    getPerson();
  }, [])

  const handleKeydown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      passUserData();
    };
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setFormSuccessful(false);
  };

  const passUserData = () =>{
    const updatedData: IStudent = {
      id: idSelect,
      first: firstName,
      last: lastName,
      email: email,
      doB: dob,
      address: address,
      phone: phone,
    }

    if(validatingInputs() === true){
      handleUpdateData(updatedData);
      setIsEdit(false);
      setIdSelect(undefined);
    };
  }

  const today = new Date().toISOString().split('T')[0];

  const hundredYearsAgo = new Date();
  hundredYearsAgo.setFullYear(hundredYearsAgo.getFullYear() - 100);
  const formattedHundredYearsAgo = hundredYearsAgo.toISOString().split('T')[0];

  return (
    <>
      <div className='  absolute left-0 top-1/2 -translate-y-1/2 z-[100] justify-center  flex w-full bg-black bg-opacity-80 h-screen  items-center'>
        <div className='w-full mx-[100px] bg-[#ffffff] shadow-md rounded-lg py-8 px-10 lg:py-14 lg:px-16 space-y-4'>
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

              <div className='flex'>
                <Button
                  onClick={() => {
                    setIsEdit(false);
                    setIdSelect(undefined);
                  }}
                  variant='contained'
                  size='large'
                  className='col-span-2 justify-center'
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    passUserData();
                  }}
                  variant='contained'
                  size='large'
                  className='col-span-2 justify-center'
                >
                  Submit
                </Button>
              </div>
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
      </div>
    </>
  );
};

export default StudentEditsComponent;