import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className='bg-[var(--blue-50)]'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center'>
        <div>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[var(--blue-700)]'>
            Тхэквондо ИТФ в Тверской области — путь к мастерству и дисциплине
          </h1>
          <p className='mt-4 text-slate-700'>
            Федерация действует с 2021 года в Редкино и Твери. Президент и{" "}
            Главный тренер — <strong>Станислав Александрович Лямин</strong>,
            международный инструктор, МСМК.
          </p>
          <div className='mt-6 flex flex-col sm:flex-row gap-3'>
            <a
              href='#signup'
              className='inline-block text-center bg-[var(--red-600)] hover:bg-[var(--blue-500)] text-white px-5 py-3 rounded-xl font-semibold transition'
            >
              Записаться на тренировку
            </a>
            <a
              href='#about'
              className='inline-block text-center px-5 py-3 rounded-xl bg-white/80 border border-white/60 text-[var(--blue-700)]'
            >
              Узнать больше
            </a>
          </div>
          <div className='mt-8 grid grid-cols-3 gap-3 sm:gap-4 text-center'>
            <Stat title='с 2021' caption='работаем' />
            <Stat title='ITF' caption='формат' />
          </div>
        </div>
        <div className='rounded-3xl bg-gradient-to-br from-[var(--blue-700)] to-[var(--blue-500)] min-h-56 sm:min-h-64 lg:min-h-[22rem] grid place-items-center text-white/90'>
          {/* заглушка без фото */}
          <span className='text-sm sm:text-base'>
            Секция тхэквондо ИТФ • Тверь / Редкино
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
type StatType = {
  title: string;
  caption: string;
};
function Stat({ title, caption }: StatType) {
  return (
    <div className='rounded-2xl bg-white/80 backdrop-blur px-3 py-4 sm:px-4 sm:py-5 border border-white/60'>
      <div className='text-lg sm:text-2xl font-extrabold text-[var(--blue-700)] leading-none'>
        {title}
      </div>
      <div className='text-[11px] sm:text-xs text-slate-600 mt-1'>
        {caption}
      </div>
    </div>
  );
}
