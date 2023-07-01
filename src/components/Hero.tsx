import Image from "next/image"
import MainImage from '../img/main-image.svg'

export default function Hero() {
  return (
    <main className="h-[546px] flex justify-center items-center gap-20">
      <section className="w-3/6">
        <div className="text-7xl font-semibold">
          <h1>Supporting startups with <br/> the best tools</h1>
        </div>

        <div className="mb-8 mt-8 w-[80%] font-medium">
          <p>Abundant capabilities: gatherings, inquiries, messages, intelligent systems, connectivity,
            conversations, insights, and more.</p>
        </div>

        <div className="flex gap-3 font-semibold text-sm">
          <input className="h-11 w-40 bg-blue-500 text-white hover:bg-blue-600 duration-75 ease-in rounded-3xl cursor-pointer" type="button" value="Start free trial" />
          <input className="h-11 w-40 border-[1px] border-black font-medium rounded-3xl cursor-pointer"  type="button" value="Book a demo" />
        </div>
      </section>

      <section>
        <div className="mb-24">
        <Image src={MainImage} width={400} height={400} alt="main-image"/>
        </div>
      </section>
    </main>
  )
}