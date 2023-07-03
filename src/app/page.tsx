import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Partnes from "@/components/Partnes"
import Goal from "@/components/Goal"
import Technologies from "@/components/Technologies"
import Plataform from "@/components/Plataform"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Partnes />
      <Goal />
      <Technologies />
      <Plataform />
      <Footer />
    </div>
  )
}
