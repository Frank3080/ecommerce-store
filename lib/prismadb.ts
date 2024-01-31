import { PrismaClient } from "@prisma/client";

// This file is setting up a global instance of prisma that can be accessed throughout the app, it ensures theres only one instance of the client and initializes it based on the env.

// This is a way to extend the global scope to include a variable that can be accessed from anywhere in the code.
declare global {
  var prisma: PrismaClient | undefined;
}

// This is a common pattern to ensure that there is a single instance of PrismaClient throughout the application.
const prismadb = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
