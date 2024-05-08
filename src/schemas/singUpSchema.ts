import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Usename must be atlest 2 Characters")
  .max(20, "Usename must be no more than 20 Characters")
  .regex(/^[a-zA-Z0-9]+$/, "Username must not conatain specual character");

export const signgUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters" }),
});
