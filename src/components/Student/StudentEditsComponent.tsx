"use client";
import React from "react";
import useFormValidation from "@/hooks/useFormValidation";
import { Alert, Button, FormControl, Snackbar, TextField } from "@mui/material";
import { IStudent } from "@/Interfaces/Interfaces";

const StudentEditsComponent = (props: {
  setIsEdit: (input: boolean) => void;
  currentStudent: IStudent;
  // setCurrentStudent: (input: string) => void;
}) => {
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
    handleSubmit,
    formSuccessful,
    setFormSuccessful,
    handleUpdate,
  } = useFormValidation();

  const handleKeydown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  const ogEmail = props.currentStudent.email;
  console.log(ogEmail);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setFormSuccessful(false);
  };

  const today = new Date().toISOString().split("T")[0];

  const hundredYearsAgo = new Date();
  hundredYearsAgo.setFullYear(hundredYearsAgo.getFullYear() - 100);
  const formattedHundredYearsAgo = hundredYearsAgo.toISOString().split("T")[0];

  return (
    <>
      <div className="  absolute top-1/2 -translate-y-1/2 z-[100] justify-center  flex w-full bg-black bg-opacity-80 h-screen  items-center">
        <div className="w-full mx-[100px] bg-[#ffffff] shadow-md rounded-lg py-8 px-10 lg:py-14 lg:px-16 space-y-4">
          <FormControl fullWidth>
            <div className="grid grid-cols-2 gap-4">
              <TextField
                label="First Name"
                variant="outlined"
                value={firstName ? firstName : props.currentStudent.first}
                onChange={(e) => setFirstName(e.target.value)}
                error={!!firstNameError}
                helperText={firstNameError}
                onKeyDown={handleKeydown}
                className="col-span-2 sm:col-span-1"
                required
              />
              <TextField
                label="Last Name"
                variant="outlined"
                value={lastName ? lastName : props.currentStudent.last}
                onChange={(e) => setLastName(e.target.value)}
                error={!!lastNameError}
                helperText={lastNameError}
                onKeyDown={handleKeydown}
                className="col-span-2 sm:col-span-1"
                required
              />
              <TextField
                variant="outlined"
                value={dob ? dob : props.currentStudent.doB}
                onChange={(e) => setDob(e.target.value)}
                error={!!dobError}
                helperText={dobError}
                onKeyDown={handleKeydown}
                className="col-span-2 sm:col-span-1"
                type="date"
                InputProps={{
                  inputProps: { min: formattedHundredYearsAgo, max: today },
                }}
                required
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                value={phone ? phone : props.currentStudent.phone}
                onChange={(e) => setPhone(e.target.value)}
                error={!!phoneError}
                helperText={phoneError}
                onKeyDown={handleKeydown}
                className="col-span-2 sm:col-span-1"
              />
              <TextField
                label="Email"
                variant="outlined"
                value={email ? email : props.currentStudent.email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
                onKeyDown={handleKeydown}
                className="col-span-2"
                required
              />
              <TextField
                label="Address"
                variant="outlined"
                value={address ? address : props.currentStudent.address}
                onChange={(e) => setAddress(e.target.value)}
                error={!!addressError}
                helperText={addressError}
                onKeyDown={handleKeydown}
                className="col-span-2"
              />

              <div className="flex">
                <Button
                  onClick={() => {
                    props.setIsEdit(false);
                  }}
                  variant="contained"
                  size="large"
                  className="col-span-2 justify-center"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    handleUpdate(ogEmail);
                    props.setIsEdit(false);
                  }}
                  variant="contained"
                  size="large"
                  className="col-span-2 justify-center"
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
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Successfully Submitted. Loading...
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default StudentEditsComponent;
