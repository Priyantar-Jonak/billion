import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers // Destructuring the handlers object
// This is the entry point for the API route