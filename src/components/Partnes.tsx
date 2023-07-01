import Startup1 from '../img/startup-1.png'
import Startup2 from '../img/startup-2.png'
import Startup3 from '../img/startup-3.png'
import Startup4 from '../img/startup-4.png'
import Startup5 from '../img/startup-5.png'
import Startup6 from '../img/startup-6.png'
import Startup7 from '../img/startup-7.png'

import Image from 'next/image'

export default function Partnes () {
  return (
    <section className="h-28 bg-[#F7F7F7] flex justify-around items-center font-semibold">
      <div className="flex gap-1">
        <Image src={Startup1} width={25} height={25} alt="Startup Logo" />
        <span>Kiyam</span>
      </div>

      <div className="flex gap-1">
        <Image src={Startup2} width={25} height={25} alt="Startup Logo" />
        <span>Oiuay</span>
      </div>

      <div className="flex gap-1">
        <Image src={Startup3} width={25} height={25} alt="Startup Logo" />
        <span>Muayn</span>
      </div>

      <div className="flex gap-1">
        <Image src={Startup4} width={25} height={25} alt="Startup Logo" />
        <span>Sopain</span>
      </div>

      <div className="flex gap-1">
        <Image src={Startup5} width={25} height={25} alt="Startup Logo" />
        <span>Aitam</span>
      </div>

      <div className="flex gap-1">
        <Image src={Startup6} width={25} height={25} alt="Startup Logo" />
        <span>Amyts</span>
      </div>

      <div className="flex gap-1">
        <Image src={Startup7} width={25} height={25} alt="Startup Logo" />
        <span>Quziz</span>
      </div>
    </section>
  )
}