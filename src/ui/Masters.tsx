function Masters() {
  return (
    <section id="coaches" className="py-14 lg:py-20 bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--blue-700)]">
          Тренерский состав
        </h2>
        <div className="mt-6 grid  text-center ">
          <Coach
            name="Станислав Александрович Лямин"
            role="Главный тренер, международный инструктор, МСМК"
          />
        </div>
      </div>
    </section>
  );
}

export default Masters;
type CoachType = {
  name: string;
  role: string;
};
function Coach({ name, role }: CoachType) {
  return (
    <div
      className="rounded-2xl p-5 bg-white border border-slate-200"
      data-aos="flip-down"
    >
      <div
        className="h-68 rounded-xl bg-slate-100 grid place-items-center text-slate-500 text-sm md:h-150"
        data-aos="fade-up"
      >
        Фото в инете не нашел, поэтому скиньте пожалуйста мне на
        <a
          href="mailto: info@thundrastudios@com"
          className="text-2xl text-blue-700"
        >
          Почту
        </a>
        или в тг по номеру
        <span className="text-2xl text-blue-700">89809399321</span>
      </div>
      <div className="mt-3 font-semibold text-[var(--blue-700)]">{name}</div>
      <div className="text-sm text-slate-600">{role}</div>
    </div>
  );
}
