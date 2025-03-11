import NextAuth from "next-auth";

import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./utilities/mongo";

const config = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Resend({
            apiKey: process.env.RESEND_API_KEY,
            from: "",
            name: "Email",
        })
    ],
    adapter: MongoDBAdapter({
        clientPromise
        // client: clientPromise,
        // collection: "users",
    })
};

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [],
  })