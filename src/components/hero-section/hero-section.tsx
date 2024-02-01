"use client";
import Image from "next/image";
import HeroImage from "./images/hero-image.png";
import { scrollToSection } from "@/utils/utils";

export function HeroSection() {
  return (
    <section className="relative mt-24">
      <div className="max-w-[1280px] mx-auto z-10 pt-24 pb-[440px]">
        <h1 className="text-7xl text-primary max-w-[900px] z-[1] mb-4 font-bold italic">
          Лучшие земельные участки Сочи
        </h1>
        <h2 className="text-2xl uppercase font-normal max-w-[560px] mb-12">
          Закрытая база уникальных предложений по выгодным ценам
        </h2>
        <button
          className="border-[2px] border-primary uppercase text-xl py-4 px-11 rounded-[3px] text-black"
          onClick={(e) => scrollToSection(e, "#quiz")}
        >
          Получить закрытую базу
        </button>
      </div>
      <Image
        src={HeroImage}
        alt="hero image"
        className="object-cover z-[-1]"
        fill
      />
    </section>
  );
}
