import Button from "./Button";

function Contacts() {
  return (
    <section id='contacts' className='py-14 lg:py-20'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start'>
        <div>
          <h2 className='text-2xl sm:text-3xl font-extrabold text-[var(--blue-700)]'>
            Контакты и запись
          </h2>
          <p className='mt-3 text-slate-700'>
            Адрес: 171261, Тверская обл., Конаковский р-н, пгт Редкино, пр-кт
            Химиков, д. 3, пом. 5.
          </p>
          <p className='mt-1 text-slate-700'>
            Телефон / мессенджеры: будут обновлены. Оставьте заявку — мы
            свяжемся.
          </p>
          <a
            href='#signup'
            className='mt-5 inline-block bg-[var(--red-600)] hover:bg-[var(--blue-500)] text-white px-5 py-3 rounded-xl font-semibold transition'
          >
            Оставить заявку
          </a>
        </div>
        <div className='rounded-2xl border border-slate-200 bg-white h-56 sm:h-64 grid place-items-center text-slate-500'>
          Карта зала
        </div>
      </div>
    </section>
  );
}

export default Contacts;
