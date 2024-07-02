import { ILogin, INewPassword, IStudent } from "@/Interfaces/Interfaces";

const url = "https://codestackform.azurewebsites.net";

// **** Getting all users ****
export const getAllUsers = async () => {
  const res = await fetch(url + "/GetUsers");
  const data: IStudent[] = await res.json();
  return data;
};

// **** Getting all students ****
export const getAllStudents = async () => {
  const res = await fetch(url + "/GetStudents");
  const data: IStudent[] = await res.json();
  return data;
};

// **** Create account ****
export const createAccount = async (loginUser: ILogin) => {
  const res = await fetch(url + `/Create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginUser),
  });

  if (!res.ok) {
    throw new Error(`Failed to create account\nError status: ${res.status}`);
  }
  return await res.json();
};

// **** ResetPassword ****
export const resetPassword = async ( newPassword: INewPassword ): Promise<boolean> => {
  const res = await fetch(url + `/ResetPassword`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPassword),
  });

  if (!res.ok) {
    throw new Error(`Failed to reset password\nError status: ${res.status}`);
  }

  return res.ok;
};

//// **** Login ****
export const login = async (loginUser: ILogin) => {
  const res = await fetch(url + `/Login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: loginUser.email,
      password: loginUser.password,
    }),
  });
  
  if (!res.ok) {
    throw new Error(`Failed to login\nError status: ${res.status}`);
  }
  return await res.json();
};

// ***** Submit Form ****
export const createRegirstration = async (data: IStudent) => {
  const res = await fetch(url + "/SubmitForm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    Error(`Failed to submit form\nError status: ${res.status}`);
  }
  const dt = await res.text();
  console.log(dt);
  // return dt;
};

// ***** Update Student ****
export const updateStudent = async (newData: IStudent, ogEmail: string) => {
  const res = await fetch(url + `/UpdateStudent/${ogEmail}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });

  if (!res.ok) {
    throw new Error(`Failed to reset password\nError status: ${res.status}`);
  }
};

// ***** Delete Student ****
export const removeStudent = async (email: string) => {
  const res = await fetch(url + `/RemoveStudent/${email}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Failed to delete student\nError status: ${res.status}`);
  }
};