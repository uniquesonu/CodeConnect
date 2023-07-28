<<<<<<< HEAD
import { Account, Client } from "appwrite";
=======
import { Account, Client, Databases, ID } from "appwrite";
>>>>>>> 5608d44 (data bases added)

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64a2d0325e1464341afd');

const account = new Account(client)
<<<<<<< HEAD


export {client, account}
=======
const database = new Databases(client)

const getCurrUser = async() => {
    const promise = account.get();
    const result = promise
        .then(user=>{
        return user.$id;
    }).catch(()=>{
        return null;
    })
    return result;
}

const addNotesToDB = async(notesData) => {
    const user = await getCurrUser()
    if(!user){
        return null;
    }
    console.log(user)
    const promise = database.createDocument(
        '64a6153ba681e8b32e3d',
        '64a616860b18b3ad068f',
        ID.unique(),
        {
            owner: user,
            ...notesData,
        }
        
    )
    const result = promise.then((response)=>{
        return response;
    }).catch(()=>{
        return null;
    })
    return result;
}


<<<<<<< HEAD
export {client, account, database, addNotesToDB}
>>>>>>> 5608d44 (data bases added)
=======
export {client, account, database, addNotesToDB, getCurrUser}
>>>>>>> 2b2d96a (added loader)
