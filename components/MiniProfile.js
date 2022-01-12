import { signOut, useSession } from "next-auth/react"

const MiniProfile = () => {
  const {data: session} = useSession();

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img className="w-16 h-16 rouded-full border p-[2px]" src={session?.user?.image} alt="avatar" />

      <div>
        <h2 className="font-bold">{session?.user?.name}</h2>
        <h3 className="test-sm text-gray-400">Welcome to InstaFail</h3>
      </div>

      <button onClick={signOut} className="text-blue-400 text-sm">Sign Out</button>
    </div>
  )
}

export default MiniProfile
