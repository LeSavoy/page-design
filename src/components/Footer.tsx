import Image from "next/image"
import Logo from "../img/logo.png"

import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="h-[326px] bg-[#F7F7F7]">
      <div className="flex mx-24 pt-12 gap-10">
        <div className="mr-[400px]">
          <Image src={Logo} width={25} height={25} alt="Logo" />
          <h4 className="my-2 font-bold text-xl">Esiwnif</h4>
          <p>We growing up your business with <br /> personal AI manager.</p>
        </div>

        <div className="flex flex-col gap-2">
          <h6 className="font-bold" >COMPANY</h6>
          <p>Blog</p>
          <p>Careers</p>
          <p>Pricing</p>
        </div>

        <div className="ml-18 flex flex-col gap-2">
          <h6 className="font-bold" >RESOURCES</h6>
          <p>Documentation</p>
          <p>Papers</p>
          <p>Press Conferences</p>
        </div>

        <div className="ml-18 flex flex-col gap-2">
          <h6 className="font-bold" >LEGAL</h6>
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Cookies Policy</p>
          <p>Data Processing</p>
        </div>
      </div>

      <hr className="mx-24 mt-14" />

      <div className="flex mx-24 justify-between mt-5">
        <p>&copy; 2023 Savoy inc. All righs reserved.</p>
        <div className="flex gap-10">
          <a href="#" ><AiOutlineInstagram size={30} /></a>
          <a href="https://github.com/lesavoy" target="_blank" ><AiOutlineGithub size={30} /></a>
          <a href="https://www.linkedin.com/in/mateus-santos-1a0b85180/" target="_blank"><AiOutlineLinkedin size={30} /></a>
        </div>

      </div>
    </footer>
  )
}