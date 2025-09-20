import Image from "next/image";
import logo from "../../public/images/logos.jpg";

function Header() {
  return (
    <header className="bg-[var(--blue-900)] text-white" data-aos="fade-down">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className=" rounded-lg bg-white/10 grid place-items-center">
            <Image src={logo} alt="bacground" className="w-8 sm:w-14" />
          </div>
          <span className="text-base sm:text-lg font-bold tracking-wide">
            РФСОО «ТОФ Тхэквондо ИТФ»
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-blue-200 transition">
            О нас
          </a>
          <a href="#programs" className="hover:text-blue-200 transition">
            Тренировки
          </a>
          <a href="#coaches" className="hover:text-blue-200 transition">
            Тренеры
          </a>
          <a href="#contacts" className="hover:text-blue-200 transition">
            Контакты
          </a>
          <a
            href="tel:89969237188"
            className="bg-[var(--red-600)] hover:bg-[var(--blue-500)] px-3 py-2 rounded-lg font-medium transition"
          >
            Записаться
          </a>
        </nav>
        {/* мобильное меню при надобности — позже */}
      </div>
    </header>
  );
}

export default Header;
