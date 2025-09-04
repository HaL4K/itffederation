function Services() {
  return (
    <section id='programs' className='py-14 lg:py-20'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <h2 className='text-2xl sm:text-3xl font-extrabold text-[var(--blue-700)]'>
          Наши тренировки
        </h2>
        <div className='mt-6 grid md:grid-cols-3 gap-4'>
          <Card
            title='Дети (с 6 лет)'
            text='Занятия в игровой форме, дисциплина, основы техники и координации.'
          />
          <Card
            title='Подростки'
            text='Физподготовка, техника ударов/защиты, спарринги, подготовка к аттестациям.'
          />
          <Card
            title='Взрослые'
            text='Общая физическая подготовка, самооборона, здоровье и выносливость.'
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
type CardType = {
  title: string;
  text: string;
};
function Card({ title, text }: CardType) {
  return (
    <div className='rounded-2xl p-5 border border-slate-200 bg-white hover:shadow-md transition'>
      <div className='font-semibold text-[var(--blue-700)]'>{title}</div>
      <p className='mt-2 text-sm text-slate-600'>{text}</p>
    </div>
  );
}
