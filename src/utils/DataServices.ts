import { IUsers } from '@/interfaces/Interfaces';

const url = 'https://codestackform.azurewebsites.net';

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

export const getAllUsers = async () => {
  const res = await fetch(url + '/GetUsers');
  const data: IUsers[] = await res.json();
  return data;
};
