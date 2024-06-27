export interface IUsers {
    _id: number;
    First: string;
    Last: string;
    Email: string;  
    DoB: string;   
    Phone: string | null;
    Address: string | null; 
    Password: string;
}