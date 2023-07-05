import { Account, Client } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64a2d0325e1464341afd');

const account = new Account(client)


export {client, account}