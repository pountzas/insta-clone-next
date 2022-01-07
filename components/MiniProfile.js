const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img className="w-16 h-16 rouded-full border p-[2px]" src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" />

      <div>
        <h2 className="font-bold">Pountzas</h2>
        <h3 className="test-sm text-gray-400">Welcome to InstaFail</h3>
      </div>

      <button className="text-blue-400 text-sm">Sign Out</button>
    </div>
  )
}

export default MiniProfile
