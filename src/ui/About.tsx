function About() {
  return (
    <section id='about' className='py-14 lg:py-20 bg-white'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <h2 className='text-2xl sm:text-3xl font-extrabold text-[var(--blue-700)]'>
          О федерации
        </h2>
        <p className='mt-4 text-slate-700 max-w-3xl'>
          Региональная физкультурно-спортивная общественная организация
          «Тверская областная федерация тхэквондо ИТФ» объединяет спортсменов
          Тверской области. Мы проводим регулярные тренировки, аттестации на
          пояса и участвуем в соревнованиях формата ITF, включая межрегиональный
          «Кубок Верхневолжья».
        </p>

        <div className='mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <Info label='ИНН' value='6949115398' />
          <Info label='КПП' value='694901001' />
          <Info label='ОГРН' value='1216900012889' />
          <Info label='Дата регистрации' value='12.10.2021' />
          <Info
            label='Адрес (юр.)'
            value='171261, Тверская обл., пгт Редкино, пр-кт Химиков, 3, пом. 5'
          />
          <Info label='Президент' value='Лямина Татьяна Сергеевна' />
        </div>
      </div>
    </section>
  );
}

export default About;
type InfoType = {
  label: string;
  value: string;
};
function Info({ label, value }: InfoType) {
  return (
    <div className='rounded-2xl p-4 border border-slate-200'>
      <div className='text-xs text-slate-500'>{label}</div>
      <div className='text-sm sm:text-base font-medium text-[var(--blue-700)]'>
        {value}
      </div>
    </div>
  );
}
