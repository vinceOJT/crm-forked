"use server";
import { auth } from "@/lib/auth"
import { success } from "zod";
import { toast } from "sonner"

export const signIn = async (email: string, password: string) => {
    try {
        await auth.api.signInEmail({
            body: {
                email,
                password,
            }

        })

        return {
            success: true,
            message: "Signed in successfully"
        }

    } catch (error) {
        const e = error as Error
        return {
            success: false,
            message: e.message || "Unknown Error Occured"
        }

    }
}

export const signUp = async (username: string, email: string, password: string) => {
    try {
        await auth.api.signUpEmail({
            body: {
                name: username,
                email,
                password,
            }

        })

        return {
            success: true,
            message: "Signed Up successfully"
        }

    } catch (error) {
        const e = error as Error
        return {
            success: false,
            message: e.message || "Unknown Error Occured"
        }

    }
}