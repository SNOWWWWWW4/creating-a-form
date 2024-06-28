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

};

//// **** Login ****
export const login = async (loginUser: ILogin) => {
  
};

export const getLoggedInUserData = async (email: string) => {
  
};

// **** UpdatePassword ****
export const updatePassword = async (email: string, password: string) => {
  
};
