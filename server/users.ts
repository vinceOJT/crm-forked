"use server";
import { auth } from "@/lib/auth"

export const signIn = async (email: string, password: string) => {
    try {
        await auth.api.signInEmail({
            body: {
                email,
                password,
            }

        })
        // console.log("LOGGGED IN")

    } catch (error) {

        throw (error)
    }
}

export const signUp = async () => {
    await auth.api.signUpEmail({
        body: {
            email: "user@email.com",
            password: "password",
            name: "Johnny V. Hendrick"
        }
    })
}