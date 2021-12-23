import Image from "next/image"

function Header() {
  return (
    <div>
      <h1>
        header
      </h1>
      <div className="flex justify-between bg-white">
        {/* left */}
        <div className="relative hidden lg:inline-grid h-24 w-24">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
            />
        </div>
        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
            />
        </div>

        <h2>asdasd</h2>
        {/* middle */}
        {/* right */}
      </div>
    </div>
  )
}

export default Header
