// import { options } from "./api/auth/[...nextauth]/options"
// import { getServerSession } from "next-auth/next"
// import UserCard from "./components/UserCard"
import LandingPage from "./landing/page"

export default async function Home() {

  // Uncomment after the authentication has been done
  // const session = await getServerSession(options)

  return (
    <>
      {/* {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : ( */}
       <LandingPage />
      {/* )} */}
    </>
  )
}
