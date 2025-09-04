function Footer() {
  return (
    <footer className='bg-[var(--blue-900)] text-white'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3'>
        <p className='text-center sm:text-left text-sm'>
          © 2025 РФСОО «ТОФ Тхэквондо ИТФ». Все права защищены.
        </p>
        <div className='flex items-center gap-4 text-sm'>
          <a className='hover:text-blue-200 transition' href='#'>
            VK
          </a>
          <a className='hover:text-blue-200 transition' href='#'>
            Telegram
          </a>
          <a className='hover:text-blue-200 transition' href='#'>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
