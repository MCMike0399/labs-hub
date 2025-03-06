"use client";
import { useState } from "react";
import { testPrismaConnection } from "@/server/test";

export default function Button() {
   const [msg, setMsg] = useState("Not Tested Yet");

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
         await testPrismaConnection();
         setMsg("prisma en vercel correcto");
      } catch (error) {
         console.error(error);
         setMsg("error al conectarse");
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            type="submit"
         >
            Test Prisma Connection
         </button>
         <h1>{msg}</h1>
      </form>
   );
}
