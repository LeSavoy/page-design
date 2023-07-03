import Google from '../img/google.png'
import Adobe from '../img/adobe.png'
import Excel from '../img/excel.png'
import Accenture from '../img/accenture.png'
import Confluencia from '../img/confluencia.png'
import Hubspot from '../img/hubspot.png'
import Photoshop from '../img/photoshop.png'

import Image from 'next/image'

export default function Technologies() {
  return (
    <section className="h-28 bg-[#F7F7F7] flex justify-around items-center font-semibold">
      <div className="flex gap-1">
        <Image src={Google} width={40} height={40} alt="Companies logo" />
      </div>

      <div className="flex gap-1">
        <Image src={Adobe} width={40} height={40} alt="Companies logo" />
      </div>

      <div className="flex gap-1">
        <Image src={Excel} width={40} height={40} alt="Companies logo" />
      </div>

      <div className="flex gap-1">
        <Image src={Accenture} width={40} height={40} alt="Companies logo" />
      </div>

      <div className="flex gap-1">
        <Image src={Confluencia} width={40} height={40} alt="Companies logo" />
      </div>

      <div className="flex gap-1">
        <Image src={Hubspot} width={40} height={40} alt="Companies logo" />
      </div>

      <div className="flex gap-1">
        <Image src={Photoshop} width={40} height={40} alt="Companies logo" />
      </div>
    </section>
  )
}