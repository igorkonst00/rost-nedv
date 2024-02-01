"use client";
import { useState } from "react";
import { ModalWindow } from "../modal-window/modal-window";
import ContactUs from "./images/contact-us.png";
import Image from "next/image";

export function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <section id="contact" className="bg-primary py-36">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-5xl text-secondary font-bold mb-5">
          Задать вопрос специалисту
        </h2>
        <p className="text-xl uppercase text-white mb-10">
          Перезвоним в течении 5 минут
        </p>
        <button
          className="border-[2px] border-white uppercase text-xl py-4 px-11 rounded-[3px] text-white"
          onClick={() => setIsModalOpen(true)}
        >
          Заказать звонок
        </button>
      </div>
      <ModalWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col max-w-[520px]">
          <h3 className="text-white text-[30px] mb-6 font-semibold">
            Оставьте заявку на консультацию с нашими экспертами
          </h3>
          <p className="text-white text-[24px] mb-4">
            Свяжемся с вами в течении 5 минут
          </p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Имя"
              className="px-5 py-3 text-base bg-input-theme border border-input-outline text-white outline-none"
            />
            <input
              type="tel"
              defaultValue="+7"
              className="px-5 py-3 text-base bg-input-theme border border-input-outline text-white outline-none"
            />
            <button
              type="submit"
              className="text-primary bg-white text-sm py-3 uppercase font-semibold"
            >
              Отправить
            </button>
          </form>
        </div>
        <div className="absolute w-[308px] h-[625px] right-[-100px] top-[-88px]">
          <Image
            src={ContactUs}
            alt="contact us"
            fill
            className="object-cover"
          />
        </div>
      </ModalWindow>
    </section>
  );
}
