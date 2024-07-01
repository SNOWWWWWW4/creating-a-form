import { ILogin, IToken } from '@/Interfaces/Interfaces';
import {
  createAccount,
  getLoggedInUserData,
  login,
} from '@/utils/DataServices';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');

  const [loginSuccess, setLoginSuccess] = useState<boolean>(false);
  const [createAccSuccess, setCreateAccSuccess] = useState<boolean>(false);
  const [switchBool, setSwitchBool] = useState<boolean>(false);
  const [admin, setAdmin] = useState<boolean>(false);

  const router = useRouter();

  // Pushing to change password page
  const changePassword = () => {
    router.push('/pages/ChangePasswordPage');
  };

  // Making sure the inputs are in the correct format
  const validatingInputs = () => {
    let valid = true;

    // username (email)
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email must include @ and be a valid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    // password
    if (password === '') {
      setPasswordError(
        'Password must be at least 15 characters long and include 1 uppercase letter, 1 number, and 1 special character from (? ! @ # $ % ^ & *)'
      );
      valid = false;
    } else if (password.length < 15) {
      setPasswordError(
        'Password must be at least 15 characters long and include 1 uppercase letter, 1 number, and 1 special character from (? ! @ # $ % ^ & *)'
      );
      valid = false;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError(
        'Password must be at least 15 characters long and include 1 uppercase letter, 1 number, and 1 special character from (? ! @ # $ % ^ & *)'
      );
      valid = false;
    } else if (!/\d/.test(password)) {
      setPasswordError(
        'Password must be at least 15 characters long and include 1 uppercase letter, 1 number, and 1 special character from (? ! @ # $ % ^ & *)'
      );
      valid = false;
    } else if (!/[?@#\$%\^&\*!]/.test(password)) {
      setPasswordError(
        'Password must be at least 15 characters long and include 1 uppercase letter, 1 number, and 1 special character from (? ! @ # $ % ^ & *)'
      );
      valid = false;
    } else {
      setPasswordError('');
    }

    // confirm password
    if (switchBool) {
      if (confirmPassword !== password) {
        setConfirmPasswordError('Passwords must match');
        valid = false;
      } else {
        setConfirmPasswordError('');
      }
    }

    return valid;
  };

  // Handling Login and Create Account
  const handleSubmit = async () => {
    if (!validatingInputs()) return;

    try {
      if (switchBool) {
        const userData: ILogin = {
          Id: 0,
          Email: email,
          Password: password,
        };

        await createAccount(userData);
        setSwitchBool(false);
        setCreateAccSuccess(true);
        resetFields();
      } else {
        const userData: ILogin = {
          Id: 0,
          Email: email,
          Password: password,
        };

        // const token: IToken = await login(userData);
        const token = { token: '' }; // placeholder for now

        if (token.token) {
          // not sure if this will work

          // const loginData = await getLoggedInUserData(email)

          // if(loginData.admin === 'true'){
          //     setAdmin(true);
          // }
          // else{
          //     setAdmin(false);
          // }

          setLoginSuccess(true);

          setTimeout(() => {
            router.push('/pages/landing');
          }, 1000);
        } else {
          setPasswordError('Incorect password');
        }
      }
    } catch (error: any) {
      handleErrors(error.message);
      resetFields();
    }
  };

  // Resetting the  fields
  const resetFields = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
  };

  // Error handling and error message
  const handleErrors = (errorMessage: string) => {
    if (errorMessage.includes('email')) {   // ex.   errorMessage.includes('Email not found')
      setEmailError(errorMessage); // meassage here  ex.   setUserNameError('User not found')
    } else if (errorMessage.includes('password')) {
      setPasswordError(errorMessage);
    } else if (errorMessage.includes('confirmPassword')) {
      setConfirmPasswordError(errorMessage);
    } else {
      console.log(errorMessage);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    switchBool,
    setSwitchBool,
    confirmPassword,
    setConfirmPassword,
    createAccSuccess,
    setCreateAccSuccess,
    loginSuccess,
    setLoginSuccess,
    emailError,
    passwordError,
    confirmPasswordError,
    handleSubmit,
    changePassword,
  };
};

export default useLogin;
