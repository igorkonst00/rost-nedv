"use client";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "./icons/phone-icon";
import { scrollToSection } from "@/utils/utils";

export function Header() {
  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-[2]">
      <div className="flex justify-between max-w-[1280px] mx-auto py-5">
        <Image
          src="/rost-logo.svg"
          alt="Рост Недвижимость логотип"
          width={92}
          height={46}
        />
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end gap-1">
            <Link href="tel:+79311063681" className="text-2xl font-bold">
              +7(931) 106-36-81
            </Link>
            <button
              className="text-sm uppercase"
              onClick={(e) => scrollToSection(e, "#contact")}
            >
              Заказать звонок
            </button>
          </div>
          <Link
            href="tel:+79311063681"
            className="flex items-center justify-center border border-primary rounded-full w-10 h-10"
          >
            <PhoneIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}
