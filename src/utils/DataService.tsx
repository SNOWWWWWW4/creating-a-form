import { IFormProps } from "@/interfaces/interface";

export const addUser = async (user: IFormProps) => {
    const res = await fetch('https://codestackform.azurewebsites.net/AddUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    console.log('Response: ' + res)
    if (!res.ok) {
        const message = 'an error has occured! ' + res.status;
        throw new Error(message);
    }

    const data = await res.json()
    console.log(data)
    return data;
    // console.log(data);
   
}