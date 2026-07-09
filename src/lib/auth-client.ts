import { createAuthClient } from "better-auth/react"
import { inferAdditionalFields } from "better-auth/client/plugins";
import { auth } from "./auth";

export const authClient = createAuthClient({
    plugins: [
        inferAdditionalFields<typeof auth>(),
    ],
    
    baseURL: process.env.NEXT_PUBLIC_CLIENT_URL,
})

export const { signIn, signUp, signOut, useSession } = authClient