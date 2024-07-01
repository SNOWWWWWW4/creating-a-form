export interface IStudent {
  id: number;
  first: string;
  last: string;
  email: string;
  doB: string;
  phone: string | null;
  address: string | null;
//   Password: string;
//   SubmitTime: string;
}

// For token
export interface IToken {
  token: string;
  adminStatus: boolean;
}

// For login and create account
export interface ILogin {
  id: number;
  password: string;
  email: string;
  adminStatus: boolean;
}
/*
  "id": 0,
  "password": "string",
  "email": "string",
  "isAdmin": true
*/

// For the form
export interface IFormData {
  Id: number;
  First: string;
  Last: string;
  Email: string;
  DoB: string;
  Phone: string | null;
  Address: string | null;
  SubmitTime: string;
}

export interface INewPassword {
  email: string;
  oldPassword: string;
  newPassword: string;
}
