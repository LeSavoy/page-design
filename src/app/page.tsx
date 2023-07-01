import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Partnes from "@/components/Partnes"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Partnes />
    </div>
  )
}
