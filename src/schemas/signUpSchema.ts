import {z} from 'zod'

export const usernameValidation = 
    z.string()
    .min(2, "Username must be atleast 2 characters")
    .max(15, "Username must be less than 15 characters")
    .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid Email address"}),
    password: z.string().min(8, {message: "Password must be atleast 8 characters"})
})