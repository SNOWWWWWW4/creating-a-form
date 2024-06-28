import { IFormData } from '@/Interfaces/Interfaces';
import { createRegirstration } from '@/utils/DataServices';
import React, { useState } from 'react'

// first
// last
// email
// dob
// address
// phone

const useFormValidation = () => {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [dob, setDob] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const [firstNameError, setFirstNameError] = useState<string>('');
    const [lastNameError, setLastNameError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [dobError, setDobError] = useState<string>('');
    const [addressError, setAddressError] = useState<string>('');
    const [phoneError, setPhoneError] = useState<string>('');

    const [formSuccessful, setFormSuccessful] = useState<boolean>(false);

    // checking if the inputs are in the correct format
    const validatingInputs = () => {
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
        const hundredYearsAgo = new Date();
        hundredYearsAgo.setFullYear(hundredYearsAgo.getFullYear() - 100);

        if (dob === '') {
          setDobError('Date of Birth cannot be empty');
          valid = false;
        } else if (dob > today) {
          setDobError('Date of Birth cannot be a future date');
          valid = false;
        } else if (dob < hundredYearsAgo.toISOString().split('T')[0]) {
          setDobError(
            'Date of Birth cannot be more than 100 years in the past'
          );
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
              'Phone number must match the format: (123)-456-7890. Include dashes in the number and parantheses.'
            );
            valid = false;
          } else {
            setPhoneError('');
          }
        } else {
          setPhoneError('');
        }

        return valid;
    }

    const handleSubmit = async () => {

        if (!validatingInputs()) return;

        try {

            const submitedUser: IFormData = {
              Id: 0,
              First: firstName,
              Last: lastName,
              Email: email,
              DoB: new Date(dob).toISOString(), 
              Phone: phone,
              Address: address,
              SubmitTime: new Date().toISOString(),
            };

            // const info = await createRegirstration(submitedUser); 
            setFormSuccessful(true);
            resetFields();

        } catch (error: any) {
            
          handleErrors(error.message);
        }
    }

    const handleErrors = (errorMessage: string) => {
        console.log(errorMessage);
        alert(errorMessage);
    }

    const resetFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setDob('');
        setAddress('');
        setPhone('');
        setFirstNameError('');  
        setLastNameError('');
        setEmailError('');
        setDobError('');
        setAddressError('');
        setPhoneError('');
    }


  return {
    firstName,
    lastName,
    email,
    dob,
    address,
    phone,
    firstNameError,
    lastNameError,
    emailError,
    dobError,
    addressError,
    phoneError,
    formSuccessful,
    handleSubmit,
    resetFields
  }
}

export default useFormValidation
