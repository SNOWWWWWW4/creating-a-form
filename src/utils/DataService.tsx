export const getUser = async () => {
    const promise = await fetch('https://codestackform.azurewebsites.net/AddUser');
    const data = await promise
}