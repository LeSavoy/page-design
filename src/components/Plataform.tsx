import Image from "next/image"
import BrasilCard from "../img/brasil-card.png"
import EuaCard from "../img/eua-card.png"
import ChinaCard from "../img/china-card.png"
import Brasil from '../img/brasil.png'
import EstadosUnidos from '../img/estados-unidos.png'
import China from '../img/china.png'

export default function Plataform() {
  return (
    <section className="h-[875px]">
      <div className="text-center text-5xl font-semibold mt-14">
        <h1 className="leading-relaxed">Discover the New Way of Investing in <br /> Real Estate</h1>
      </div>
      <div className="justify-center gap-4 mt-10 mb-14 flex">
        <input className="h-11 w-40 bg-blue-500 text-white hover:bg-blue-600 duration-75 ease-in rounded-3xl cursor-pointer" type="button" value="Buy INTL" />
        <input className="h-11 w-40 border-[1px] border-blue-500 text-blue-500 font-medium rounded-3xl cursor-pointer hover:border-none hover:bg-blue-500 hover:text-white duration-75 ease-in text-sm" type="button" value="Discover Plataform" />
      </div>

      <div className="flex justify-evenly">

        {/* Card 1 */}
        <div className="h-[430px] w-72 border-solid rounded-3xl border-blue-200 border-2">
          <Image className="rounded-t-3xl" src={BrasilCard} width={300} height={300} alt="Card" />
          <div className="bg-blue-200 flex mt-3 ml-3 w-24 rounded-3xl mb-3">
            <Image src={Brasil} width={25} height={25} alt="Brasil flag" />
            <span className="ml-1 font-light">Brasil</span>
          </div>

          <p className="mr-3 ml-3 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas.</p>

          <div className="ml-3 mt-3 text-sm">
            <span className="font-light">Fractions Price</span>
            <span className="ml-[74px] px-3 py-[3.5px] rounded-3xl bg-blue-200">725 INTZ</span>
          </div>

          <div className="text-sm mt-3">
            <span className="font-light ml-3">Est. Return</span>
            <span className="ml-[72px] font-medium">2.3% Per Mounth</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="h-[430px] w-72 border-solid rounded-3xl border-blue-200 border-2 mt-8">
          <Image className="rounded-t-3xl" src={EuaCard} width={300} height={300} alt="Card" />
          <div className="bg-blue-200 flex mt-3 ml-3 w-24 rounded-3xl mb-3">
            <Image src={EstadosUnidos} width={25} height={25} alt="Brasil flag" />
            <span className="ml-1 font-light">States</span>
          </div>

          <p className="mr-3 ml-3 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas.</p>

          <div className="ml-3 mt-3 text-sm">
            <span className="font-light">Fractions Price</span>
            <span className="ml-[74px] px-3 py-[3.5px] rounded-3xl bg-blue-200">725 INTZ</span>
          </div>

          <div className="text-sm mt-3">
            <span className="font-light ml-3">Est. Return</span>
            <span className="ml-[72px] font-medium">2.3% Per Mounth</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="h-[430px] w-72 border-solid rounded-3xl border-blue-200 border-2">
          <Image className="rounded-t-3xl" src={ChinaCard} width={300} height={300} alt="Card" />
          <div className="bg-blue-200 flex mt-3 ml-3 w-24 rounded-3xl mb-3">
            <Image src={China} width={25} height={25} alt="Brasil flag" />
            <span className="ml-1 font-light">China</span>
          </div>

          <p className="mr-3 ml-3 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas.</p>

          <div className="ml-3 mt-3 text-sm">
            <span className="font-light">Fractions Price</span>
            <span className="ml-[74px] px-3 py-[3.5px] rounded-3xl bg-blue-200">725 INTZ</span>
          </div>

          <div className="text-sm mt-3">
            <span className="font-light ml-3">Est. Return</span>
            <span className="ml-[72px] font-medium">2.3% Per Mounth</span>
          </div>
        </div>

      </div>
    </section>
  )
}