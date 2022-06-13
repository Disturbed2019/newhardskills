import React from 'react';

const BaProgram = () => {
  return (
    <section className={'py-[80px] px-8 max-w-[1240px] mx-auto'}>
      <h2 className={'text-center text-3xl md:text-6xl font-bold mb-8'}>Программа курса</h2>
      <div className={'grid  sm:grid-cols-2'}>
        <div className={' p-4 text-md sm:text-sm md:text-xl'}>
          <p><span className={'text-[#24cd03]'}>1. </span> Бизнес-анализ в IT</p>
          <p><span className={'text-[#24cd03]'}>2. </span> Работы бизнеса с IT-продуктами и проектное управление</p>
          <p><span className={'text-[#24cd03]'}>3. </span> Инфраструктура IT </p>
          <p><span className={'text-[#24cd03]'}>4. </span> Основы программного обеспечения</p>
          <p><span className={'text-[#24cd03]'}>5. </span> Основы SQL</p>
          <p><span className={'text-[#24cd03]'}>6. </span> Видение и состав продукта</p>
          <p><span className={'text-[#24cd03]'}>7. </span> Stakeholders и извлечение требований</p>
          <p><span className={'text-[#24cd03]'}>8. </span> Понятие, Определение и анализ заинтересованных лиц</p>
          <p><span className={'text-[#24cd03]'}>9. </span> Бизнес-требования</p>
          <p><span className={'text-[#24cd03]'}>10.</span> Бизнес-процессы</p>
        </div>
        <div className={' p-4 text-md sm:text-sm md:text-xl'}>
          <p><span className={'text-[#24cd03]'}>11.</span> Разработка требований: извлечение и анализ требований</p>
          <p><span className={'text-[#24cd03]'}>12.</span> Хранение и документирование требований</p>
          <p><span className={'text-[#24cd03]'}>13.</span> Пользовательские истории</p>
          <p><span className={'text-[#24cd03]'}>14.</span> Варианты использования</p>
          <p><span className={'text-[#24cd03]'}>15.</span> Требования к данным</p>
          <p><span className={'text-[#24cd03]'}>16.</span> Атрибуты качества</p>
          <p><span className={'text-[#24cd03]'}>17.</span> Моделирование в бизнес - анализе</p>
          <p><span className={'text-[#24cd03]'}>18.</span> Прототипирование и визуализация требований</p>
          <p><span className={'text-[#24cd03]'}>19.</span> Общие требования и управления изменениями</p>
          <p><span className={'text-[#24cd03]'}>20.</span> Продакт-менеджмент</p>
        </div>
      </div>
      <div className={'flex sm:justify-center'}>
        <div className={'p-4 text-md sm:text-sm md:text-xl'}>
          <p><span className={'text-[#24cd03]'}> 21.</span> Подведение итогов</p>
          <p><span className={'text-[#24cd03]'}> 22.</span> Работа над дипломным проектом</p>
          <p><span className={'text-[#24cd03]'}> 23.</span> Тренинг «Трудоустройство в IT»</p>
          <p><span className={'text-[#24cd03]'}> 24.</span> Защита дипломного проекта.</p>
        </div>
      </div>

    </section>
  );
};

export default BaProgram;