// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";


// export const dynamic = 'force-dynamic'
// const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

// // async function getUser() {
// //     const res = await fetch('http://localhost:3000/user', {
// //         cache: 'no-store'
// //     })
// //     return res.json()
// // }


// async function getUser(id) {
//   const res = await fetch(`${baseUrl}/api/user`,{
//       cache: 'no-store'
//   })
//   return res.json();
// }



// export default async function Dashboard() {
//     const {data: session, status} = useSession()
//     const router = useRouter()

//     const user = await getUser();
//     // console.log(user);

//     useEffect(()=>{
//         if(status === 'unauthenticated'){
//             router.push('/login')
//         }
//     }, [status])

//     if (status === 'loading') return <h1>Loading.....</h1>

//     return(
//         <div>
//             <h1> Selamat datang, {user[0]?.name}</h1>
//             <h1> Selamat datang, {session.user.email}</h1>
//             <p>Saldo: Rp {user[0]?.balance?.toLocaleString()}</p>
//         </div>
//     )
// }

'use client';
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Dashboard() {
    const {data: session, status} = useSession()
    const router = useRouter()

    const handleLogout = async () => {
        await signOut({ callbackUrl: '/login' });
      };

    useEffect(()=>{
        if(status === 'unauthenticated'){
            router.push('/login')
        }
    }, [status])

    if (status === 'loading') return <h1>Loading.....</h1>

    return (
        <>
    <div>Welcome, {session.user.name} </div>
    <button type="button" className="text-black" onClick={handleLogout}>logout</button>
    </>
    ) 
}

