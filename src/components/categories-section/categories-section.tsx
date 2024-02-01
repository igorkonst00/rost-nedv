import Image from "next/image";
import Ijs from "./images/ijs.png";
import Build from "./images/build.png";
import Buisnes from "./images/buisnes.png";
import Glamping from "./images/glamping.png";
import Invest from "./images/invest.png";

export function CategoriesSection() {
  return (
    <section className="bg-primary pt-20">
      <ul className="flex gap-52 justify-center">
        <li className="flex flex-col gap-5 items-center">
          <h3 className="uppercase text-xl text-white">глэмпинг</h3>
          <Image src={Glamping} alt="глэмпинг" />
        </li>
        <li className="flex flex-col gap-5 items-center">
          <h3 className="uppercase text-xl text-white">дом для жизни (ижс)</h3>
          <Image src={Ijs} alt="ижс" />
        </li>
        <li className="flex flex-col gap-5 items-center">
          <h3 className="uppercase text-xl text-white">инвестиции</h3>
          <Image src={Invest} alt="инвестиции" />
        </li>
      </ul>
      <ul className="flex gap-52 justify-center relative -top-20">
        <li className="flex flex-col gap-5 items-center">
          <Image src={Buisnes} alt="бизнес" />
          <h3 className="uppercase text-xl text-white">бизнес</h3>
        </li>
        <li className="flex flex-col gap-5 items-center">
          <Image src={Build} alt="строительство" />
          <h3 className="uppercase text-xl text-white">строительство</h3>
        </li>
      </ul>
    </section>
  );
}
