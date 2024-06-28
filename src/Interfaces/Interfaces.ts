export interface IUsers {
    Id: number;
    First: string;
    Last: string;
    Email: string;  
    DoB: string;   
    Phone: string | null;
    Address: string | null; 
    Password: string;
    SubmitTime: string;
}


// For token
export interface IToken {
    token: string;
}

// For login and create account
export interface ILogin {
    Id: number;
    Email: string;
    Password: string;
}



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