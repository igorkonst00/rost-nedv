import { ListIcon } from "./list-icon";

export function AboutSection() {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-5xl text-secondary font-bold border-b-[2px] border-white pb-6 mb-6">
          Почему мы?
        </h2>
        <ul className="text-white text-xl font-normal flex flex-col gap-3">
          <li className="flex gap-5 items-center">
            <ListIcon />
            Проверяем землю на юридическую чистоту
          </li>
          <li className="flex gap-5 items-center">
            <ListIcon />
            Помогаем в оформлении ипотеки (семейная, льготная, IT и тд)
          </li>
          <li className="flex gap-5 items-center">
            <ListIcon />
            Помогаем в подборе аккредитованного подрядчика для строительства
          </li>
        </ul>
      </div>
    </section>
  );
}
