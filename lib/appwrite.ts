import {Account, Avatars, Client, Databases} from "react-native-appwrite";
import {CreateUserParams, CreateUserPrams} from "@/type";

export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
    platform: "com.winfriedweis.fooddeliveryapp",
    databaseId: "693fe308003869df3b88",
    tableId: "user"
}

export const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)

export const account = new Account(client);
export const database = new Databases(client);
export const avatar = new Avatars(client);

export const createUser = async ({email, password, name}): CreateUserParams => {
    try {
        const new Account = await account.create()
    } catch (e) {
        throw new Error(e as string);
    }
}