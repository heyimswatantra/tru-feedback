import {z} from 'zod'

export const acceptingMessageSchema = z.object({
    content: z.
    string()
    .min(2, {message: "Content must be atleast 2 characters"})
    .max(300, {message: "Content must be less than 200 characters"})
})