import { IUsers } from "@/Interfaces/Interfaces";

const url = 'https://codestackform.azurewebsites.net/';

export const createRegirstration = async (data: IUsers) => {
    const res = await fetch(url  + '/AddUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
      if (res.status === 409) {
        throw new Error('Username already exists');
      } else {
        throw new Error(`An error has occured: ${res.status}`);
      }
    }
}       

export const getAllUsers = async () => {
    const res = await fetch(url + '/GetUsers');
    const data = await res.json();
    return data;
}