import { INewPassword } from '@/Interfaces/Interfaces';
import { resetPassword } from '@/utils/DataServices';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


const useResetPassword = () => {

  const [email, setEmail] = useState<string>('');
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');

  const [emailError, setEmailError] = useState<string>('');
  const [oldPasswordError, setOldPasswordError] = useState<string>('');
  const [newPasswordError, setNewPasswordError] = useState<string>('');
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState<string>('');

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

    const specialCharacterRegex = /^[A-Za-z0-9?!@#$%^&*]*$/;
    const requiredSpecialCharacterRegex = /[?@#\$%\^&\*!]/;

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
    } else if (!requiredSpecialCharacterRegex.test(oldPassword)) {
      setOldPasswordError(
        'Password must be at least 15 characters long and include 1 uppercase letter, 1 number, and 1 special character from (? ! @ # $ % ^ & *)'
      );
      valid = false;
    } else if (!specialCharacterRegex.test(oldPassword)) {
      setOldPasswordError(
        'Password can only include special characters from ? ! @ # $ % ^ & *, and must have at least 1 uppercase letter, and 1 number'
      );
      valid = false;
    } else {
      setOldPasswordError('');
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

    const specialCharacterRegex = /^[A-Za-z0-9?!@#$%^&*]*$/;
    const requiredSpecialCharacterRegex = /[?@#\$%\^&\*!]/;

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
      valid = false;
    } else if (!requiredSpecialCharacterRegex.test(newPassword)) {
      setNewPasswordError(
        'Password must be at least 15 characters long and include 1 uppercase letter, 1 number, and 1 special character from (? ! @ # $ % ^ & *)'
      );
      valid = false;
    } else if (!specialCharacterRegex.test(newPassword)) {
      setNewPasswordError(
        'Password can only include special characters from ? ! @ # $ % ^ & *, and must have at least 1 uppercase letter, and 1 number'
      );
      valid = false;
    } else {
      setNewPasswordError('');
    }

    // confrim new password
    if (confirmNewPassword !== newPassword) {
      setConfirmNewPasswordError('Passwords do not match');
      valid = false;
    } else {
      setConfirmNewPasswordError('');
    }

    return valid;
  }

  
  // update password
  const handleResetPassword = async () => {
    if(!validatingSecondSetOfInputs()) return;

    try {
      const newPass: INewPassword = {
        email,
        oldPassword,
        newPassword,
      };

      await resetPassword(newPass).then(data => {
        if (data) {
          setSuccessfulPasswordReset(true);
          setTimeout(() => {
            router.push('/')
            resetFields();
            setSwitchBoolTwo(false);
          }, 1000)
        }
      })

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
  }
}

export default useResetPassword
