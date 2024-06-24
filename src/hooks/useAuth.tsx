import { useRouter } from 'next/navigation';
import { useState } from 'react';


const useAuth = () => {

  const router = useRouter();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [firstNameError, setFirstNameError] = useState<string>('');
  const [lastNameError, setLastNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [dobError, setDobError] = useState<string>('');
  const [addressError, setAddressError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');

  const [passwordStrength, setPasswordStrength] = useState<string>('');
  const [switchBool, setSwitchBool] = useState<boolean>(false);
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false);


  const validateInputs = () => {
    let valid = true;

    if (firstName.length > 100) {
      setFirstNameError('First Name must be less than 100 characters');
      valid = false;
    } else if (firstName.length < 1) {
      setFirstNameError('First Name cannot be empty');
      valid = false;
    } else {
      setFirstNameError('');
    }

    if (lastName.length > 100) {
      setLastNameError('Last Name must be less than 100 characters');
      valid = false;
    } else if (lastName.length < 1) {
      setLastNameError('Last Name cannot be empty');
      valid = false;
    } else {
      setLastNameError('');
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email must include @ and be a valid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    const today = new Date().toISOString().split('T')[0];
    if (dob === '') {
      setDobError('Date of Birth cannot be empty');
      valid = false;
    } else if (dob > today) {
      setDobError('Date of Birth cannot be a future date');
      valid = false;
    } else {
      setDobError('');
    }

    // Address validation (optional)
    if (address !== '') {
      if (address.length > 100) {
        setAddressError('Address must be less than 100 characters');
        valid = false;
      } else if (address.length < 1) {
        setAddressError('Address cannot be empty');
        valid = false;
      } else {
        setAddressError('');
      }
    } else {
      setAddressError('');
    }

    // Phone validation (optional)
    if (phone !== '') {
      if (!/^\(\d{3}\)-\d{3}-\d{4}$/.test(phone)) {
        setPhoneError(
          'Phone number must match the format: (123)-456-7890. Include dashes in the number.'
        );
        valid = false;
      } else {
        setPhoneError('');
      }
    } else {
      setPhoneError('');
    }


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
    } else if (!/[?@#\$%\^&\*]/.test(password)) {
      setPasswordError(
        'Password must be at least 15 characters long and include 1 uppercase letter, 1 number, and 1 special character from (? ! @ # $ % ^ & *)'
      );
      valid = false;
    } else {
      setPasswordError('');
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords must match');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    return valid;
  };


    const validatingPasswordStrength = () => {
    let newSuggestions = [];
   
    if (password.length < 15)
      newSuggestions.push('Password should be at least 15 characters long');
    if (!/[A-Z]/.test(password))
      newSuggestions.push(
        'Password should include at least one uppercase letter'
      );
    if (!/\d/.test(password))
      newSuggestions.push('Password should include at least one number');
    if (!/[?@#\$%\^&\*]/.test(password))
      newSuggestions.push(
        'Password should include at least one special character from (? ! @ # $ % ^ & *)'
      );

    if (newSuggestions.length === 0) {
      setPasswordStrength('Very Strong');
    } else if (newSuggestions.length <= 1) {
      setPasswordStrength('Strong');
    } else if (newSuggestions.length <= 2) {
      setPasswordStrength('Moderate');
    } else if (newSuggestions.length <= 3) {
      setPasswordStrength('Weak');
    } else {
      setPasswordStrength('Are we being for real right now?');
    }
  }

  const handleSubmit = async () => {
    if (!validateInputs()) return;

    try {
        
        setLoginSuccess(true);
        
        setTimeout(() => {
            router.push('/pages/success');
        }, 1000);
        
        resetFields()
    } catch (error: any) {
      handleErrors(error.message);
    }
  };

  const resetFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setDob('');
    setAddress('');
    setPhone('');
    setPassword('');
    setConfirmPassword('');

    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setDobError('');
    setAddressError('');
    setPhoneError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setPasswordStrength('');
  };

  const handleErrors = (errorMessage: string) => {
    if (errorMessage.includes('email')) {
      setEmailError(errorMessage); // meassage here
    } else if (errorMessage.includes('password')) {
      setPasswordError(errorMessage); // meassage here
    } else if (errorMessage.includes('confirmPassword')) {
      setConfirmPasswordError(errorMessage); // meassage here
    } else {
      alert(errorMessage);
    }
  };

  return {
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
    passwordStrength,
    handleSubmit,
    switchBool,
    setSwitchBool,
    loginSuccess,
    setLoginSuccess,
    validatingPasswordStrength,
  };
};

export default useAuth;
