"use server";
import prisma from "@/lib/prisma";

export async function testPrismaConnection() {
   try {
      await prisma.$connect();
      console.log("Connected to the database");
   } catch (error) {
      console.error(error);
      throw new Error(error instanceof Error ? error.message : "An unknown error occurred");
   }
}
