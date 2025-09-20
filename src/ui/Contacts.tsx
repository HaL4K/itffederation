function Contacts() {
  return (
    <section
      id="contacts"
      className="py-14 lg:py-20"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="700"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--blue-700)]">
            Контакты и запись
          </h2>
          <p className="mt-3 text-slate-700">
            Адрес: 171261, Тверская обл., Конаковский р-н, пгт Редкино, пр-кт
            Химиков, д. 3, пом. 5.
          </p>
          <p className="mt-1 text-slate-700">
            Телефон / мессенджеры: будут обновлены. Оставьте заявку — мы
            свяжемся.
          </p>
          <a
            href="tel:89969237188"
            className="mt-5 inline-block bg-[var(--red-600)] hover:bg-[var(--blue-500)] text-white px-5 py-3 rounded-xl font-semibold transition"
          >
            Оставить заявку
          </a>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white h-56 sm:h-64 grid place-items-center text-slate-500">
          <iframe
            className="h-50 sm:h-56 w-64 sm:w-120 rounded-2xl"
            src="https://yandex.ru/map-widget/v1/?ll=36.289279%2C56.665036&mode=poi&poi%5Bpoint%5D=36.288213%2C56.667167&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1016515551&z=16.71"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
