import { ILogin, IToken } from '@/Interfaces/Interfaces';
import { createAccount, login } from '@/utils/DataServices';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import sunIcon from '/826853.png'

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

  const handleAdmin = () => {
    localStorage.setItem('admin', 'true')
    router.push('/pages/ManagementPage')
  }

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
    const specialCharacterRegex = /^[A-Za-z0-9?!@#$%^&*]*$/;
    const requiredSpecialCharacterRegex = /[?@#\$%\^&\*!]/;

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
    } else if (!requiredSpecialCharacterRegex.test(password)) {
      setPasswordError(
        'Password must be at least 15 characters long and include 1 uppercase letter, 1 number, and 1 special character from (? ! @ # $ % ^ & *)'
      );
      valid = false;
    } else if (!specialCharacterRegex.test(password)) {
      setPasswordError(
        'Password can only include special characters from ? ! @ # $ % ^ & *, and must have at least 1 uppercase letter, and 1 number'
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
          id: 0,
          email: email,
          password: password,
          adminStatus: false,
        };

        await createAccount(userData);
        setSwitchBool(false);
        setCreateAccSuccess(true);
        toast.success('Account successfully created!', {
          icon: (
            <div style={{ width: '40px', height: '40px' }}>
              <img src="/826853.png" alt="Custom Icon" width={24} height={24} />
            </div>
          )
        })
        resetFields();
      } else {
        const userData: ILogin = {
          id: 0,
          email: email,
          password: password,
          adminStatus: false,
        };

        const token: IToken = await login(userData);

        if (token.token) {
          setLoginSuccess(true);
          toast.success('Welcome back! Loading next page...', {
            icon: (
              <div style={{ width: '40px', height: '40px' }}>
                <img src="/826853.png" alt="Custom Icon" width={24} height={24} />
              </div>
            )
          })

          localStorage.setItem('admin', JSON.stringify(token.adminStatus));

          if (token.adminStatus) {
            setTimeout(() => {
              router.push('/pages/ManagementPage');
            }, 1000);
          } else if (!token.adminStatus) {

            setTimeout(() => {
              router.push('/pages/HomePage')
            }, 3000);
          } else {
            alert('Something went wrong');
          }
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
    if (errorMessage.includes('email')) {
      // ex.   errorMessage.includes('Email not found')
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
    handleAdmin,
    changePassword,
    admin,
    setAdmin,
  };
};

export default useLogin;
