import { updatePassword } from '@/utils/DataServices';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


const useResetPassword = () => {

  const [email, setEmail] = useState<string>('');
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confrimNewPassword, setConfrimNewPassword] = useState<string>('');

  const [emailError, setEmailError] = useState<string>('');
  const [oldPasswordError, setOldPasswordError] = useState<string>('');
  const [newPasswordError, setNewPasswordError] = useState<string>('');
  const [confrimNewPasswordError, setConfrimNewPasswordError] = useState<string>('');

  const [switchBoolTwo, setSwitchBoolTwo] = useState<boolean>(false);
  const [successfulPasswordReset, setSuccessfulPasswordReset] = useState<boolean>(false);

  const router = useRouter();

  const validatingFirstSetOfInputs = () => {
    let valid = true;

    // email
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email must include @ and be a valid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    // old password
    if (oldPassword === '') {
      setOldPasswordError(
        'Password must be at least 15 characters long and include 1 uppercase letter, 1 number, and 1 special character from (? ! @ # $ % ^ & *)'
      );
      valid = false;
    } else if (oldPassword.length < 15) {
      setOldPasswordError(
        'Password must be at least 15 characters long and include 1 uppercase letter, 1 number, and 1 special character from (? ! @ # $ % ^ & *)'
      );
      valid = false;
    } else if (!/[A-Z]/.test(oldPassword)) {
      setOldPasswordError(
        'Password must be at least 15 characters long and include 1 uppercase letter, 1 number, and 1 special character from (? ! @ # $ % ^ & *)'
      );
      valid = false;
    } else if (!/\d/.test(oldPassword)) {
      setOldPasswordError(
        'Password must be at least 15 characters long and include 1 uppercase letter, 1 number, and 1 special character from (? ! @ # $ % ^ & *)'
      );
      valid = false;
    } else if (!/[?@#\$%\^&\*!]/.test(oldPassword)) {
      setOldPasswordError(
        'Password must be at least 15 characters long and include 1 uppercase letter, 1 number, and 1 special character from (? ! @ # $ % ^ & *)'
      );
    }
    return valid;
  }

  // moves onto then next set of inputs
  const handleContinue = () => {
    if (!validatingFirstSetOfInputs()) return;
    
    try {
      setSwitchBoolTwo(true);
    } catch (error: any) {
      handleErrors(error.message);
    }
  }

  // checks if the two new passwords match
  const validatingSecondSetOfInputs = () => {
    let valid = true;

    // new password
    if (newPassword === '') {
      setNewPasswordError(
        'Password must be at least 15 characters long and include 1 uppercase letter, 1 number, and 1 special character from (? ! @ # $ % ^ & *)'
      );
      valid = false;
    } else if (newPassword.length < 15) {
      setNewPasswordError(
        'Password must be at least 15 characters long and include 1 uppercase letter, 1 number, and 1 special character from (? ! @ # $ % ^ & *)'
      );
      valid = false;
    } else if (!/[A-Z]/.test(newPassword)) {
      
      valid = false;
    } else if (!/\d/.test(newPassword)) {
      setNewPasswordError(
        'Password must be at least 15 characters long and include 1 uppercase letter, 1 number, and 1 special character from (? ! @ # $ % ^ & *)'
      );
    } else if (!/[?@#\$%\^&\*!]/.test(newPassword)) {
      setNewPasswordError(
        'Password must be at least 15 characters long and include 1 uppercase letter, 1 number, and 1 special character from (? ! @ # $ % ^ & *)'
      );
    }

    // confrim new password
    if (confrimNewPassword !== newPassword) {
      setConfrimNewPasswordError('Passwords do not match');
      valid = false;
    } else {
      setConfrimNewPasswordError('');
    }

    return valid;
  }

  
  // update password
  const handleUpdatePassword = async () => {
    if(!validatingSecondSetOfInputs()) return;

    try {

      // await updatePassword(email,  newPassword).then(data =>{
      //     if(data){
      //       setSuccessfulPasswordReset(true);
      //       setTimeout(() => {
      //         router.push('/')
      //         resetFields();
      //         setSwitchBoolTwo(false);
      //       }, 1000)
      //     }
      // })

    } catch (error: any) {
      handleErrors(error.message);
    }
  }
  
  
  const resetFields = () => {
    setEmail('');
    setOldPassword('');
    setNewPassword('');
    setEmailError('');
    setOldPasswordError('');
    setNewPasswordError('');
  }

  const handleErrors = (errorMessage: string) => {
    if (errorMessage.includes('email')) {
      setEmailError(errorMessage); // meassage here
    } else if (errorMessage.includes('oldPassword')) {
      setOldPasswordError(errorMessage); // meassage here
    } else if (errorMessage.includes('newPassword')) {
      setNewPasswordError(errorMessage); // meassage here
    } else {
      console.log(errorMessage);
    }
  }

  
  return {
    email,
    setEmail,
    oldPassword,
    setOldPassword,
    newPassword,
    setNewPassword,
    confrimNewPassword,
    setConfrimNewPassword,
    emailError,
    oldPasswordError,
    newPasswordError,
    confrimNewPasswordError,
    handleContinue,
    handleUpdatePassword,
    resetFields,
    switchBoolTwo,
    setSwitchBoolTwo,
  }
}

export default useResetPassword
