"use server";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createNewUser(email: string, passwd: string) {
   try {
      await prisma.user.create({
         data: {
            email,
            passwd,
         },
      });
      revalidatePath("/user");
   } catch (error) {
      console.error(error);
      throw new Error(error instanceof Error ? error.message : "An unknown error occurred");
   }
}

export async function getUserInfoById(id: string): Promise<User | null> {
   try {
      const user = await prisma.user.findUnique({
         where: {
            id,
         },
      });
      return user;
   } catch (error) {
      console.error(error);
      return null;
   }
}
