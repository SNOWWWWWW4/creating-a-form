import { ILogin, IUsers } from '@/Interfaces/Interfaces';

const url = 'https://codestackform.azurewebsites.net';


// **** Form submission ****
export const createRegirstration = async (data: IUsers) => {
  const res = await fetch(url + '/AddUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    Error(`An error has occured: ${res.status}`);
  }
  const dt = await res.text();
  console.log(dt)
  // return dt;
};

// **** Getring all users ****
export const getAllUsers = async () => {
  const res = await fetch(url + '/GetUsers');
  const data: IUsers[] = await res.json();
  return data;
};


// **** Create account ****
export const createAccount = async (loginUser: ILogin) => {
  const res = await fetch(url + ``, {
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

//// **** Login ****
export const login = async (loginUser: ILogin) => {
  const res = await fetch(url + '/');
  const data = await res.json();
  return data;
};

export const getLoggedInUserData = async (email: string) => {
  const res = await fetch(url + '/');
  const data = await res.json();
  return data;
};

// **** UpdatePassword ****
export const updatePassword = async (email: string, password: string) => {

  const res = await fetch(url + `/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email: email, password: password}),
  });

  if (!res.ok) {
    throw new Error(`Failed to create account\nError status: ${res.status}`);
  }
};
