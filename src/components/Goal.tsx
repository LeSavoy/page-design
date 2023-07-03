import Image from "next/image"
import GoalImage from '../img/goalImg.svg'

export default function Goal() {
  return (
    <section className="h-[660px] w-screen flex justify-center mb-8">
      <div className="mt-10 w-2/5">
        <Image className="rounded-r-xl" src={GoalImage} width={500} height={500} alt="Goal Image" />
      </div>

      <div className="mt-28 w-2/4 mr-36">
        <h2 className="text-4xl mb-6 font-semibold">Innovative Tech Company Revolutionizing NFTs and Redefining Digital Assets.</h2>
        <p className="mb-6">We are a leading tech company specializing in NFTs (Non-Fungible Tokens).</p>
        <p className="mb-6">Our focus is on 
          leveraging blockchain technology to empower creators, collectors, and enthusiasts worldwide. 
          Through our platform, individuals can showcase their unique digital assets and engage with a global 
          community.</p>
        <input className="h-11 w-40 bg-blue-500 text-white hover:bg-blue-600 duration-75 ease-in rounded-3xl cursor-pointer" type="button" value="Learn more"/>
      </div>
    </section>
  )
}