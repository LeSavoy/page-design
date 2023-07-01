import Logo from "../img/logo.png"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="flex items-center mt-1 h-20 font-medium">
      <div className="ml-10 flex items-center gap-1">
        <Image src={Logo} width={30} height={30} alt="Logo" />
        <span className="text-lg font-semibold">Esiwnif</span>
      </div>

      <div className="flex gap-6 ml-10 pr-[650px]">
        <p>Pricing</p>
        <p>Features</p>
        <p>Use Cases</p>
      </div>

      <div className="flex gap-6 items-center">
        <p className="underline">Sign in</p>
        <input className="h-11 w-40 bg-blue-500 text-white rounded-3xl cursor-pointer hover:bg-blue-600 duration-75 ease-in" type="button" value="Book a demo" />
      </div>
    </nav>
  )
}