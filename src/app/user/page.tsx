import { getUserInfoById } from "@/server/user/user.actions";

export default async function UserPage() {
   const user = await getUserInfoById("cm7w9ouai00003g4ajy3pb1wu");
   return (
      <div>
         <h1>{user ? <p>{user.email}</p> : <p>NOT FOUND</p>}</h1>
      </div>
   );
}
