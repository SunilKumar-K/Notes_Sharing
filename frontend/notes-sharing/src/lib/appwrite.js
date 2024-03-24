import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65ffba8e8d501d7c1099'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
