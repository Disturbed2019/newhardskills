import React from 'react';

const BaDescription = () => {
  return (
    <>
      <section className={'py-[80px] px-8 max-w-[1240px] mx-auto'}>
        <h2 className={'text-center text-3xl md:text-6xl font-bold mb-8'}>О курсе</h2>
        <p className={'md:text-2xl text-md text-gray-400'}>
          <span className={'text-[#24cd03] font-bold'}>Бизнес-аналитик </span>
          - это специалист, работающий с представителями бизнеса и командой разработки IT-решения.
          Используя различные техники анализа требований, бизнес-аналитик изучает проблему, возможность для бизнеса и
          предоставляет спецификацию требований в разработку.</p>
        <p className={'md:text-2xl text-md text-gray-400'}>
          Для общения с различными группами заинтересованных лиц, а также для решения сложных и трудоемких задач
          бизнес-аналитик обладает коммуникативными навыками, пониманием технических основ IT-продуктов, хорошим
          английским и структурным мышлением.
        </p>
        <p className={'my-4 font-bold'}>После прохождения курса вы сможете:</p>
        <ul className={'list-disc pl-4 text-gray-400 md:text-xl text-md'}>
          <li>Разбираться в основах разработки программных продуктов;</li>
          <li>Понимать роли бизнес- и системного аналитика в процессе разработки программного обеспечения;</li>
          <li>Применять основные техники и подходы к верификации, валидации и управлению требованиями;</li>
          <li>Использовать основные правила и приемы по ведению технической документации и создавать качественные документы;</li>
          <li>Понимать основные модели, методологии и процессы разработки программного обеспечения;</li>
          <li>Грамотно фиксировать бизнес-требования, составлять необходимую документацию;</li>
          <li>Профессионально подготовлены к работе бизнес-аналитика в IT, в соответствии с требованиями международных компаний;</li>
        </ul>
      </section>
      <section className={'py-[80px] px-8 max-w-[1240px] mx-auto'}>
        <h2 className={'text-center text-3xl md:text-6xl font-bold mb-8'}>Карьерный рост</h2>
        <div className={'text-center md:text-xl text-md'}>
          <div className={'grid md:grid-cols-3 pb-4 md:pb-0 border-b-2 border-gray-600'}>
            <p className={'my-4 font-bold'}>Junior Python Developer</p>
            <p className={'text-gray-400 self-center'}>После обучения</p>
            <p className={'text-[#24cd03] self-center font-bold'}>от 600 $</p>
          </div>
          <div className={'grid md:grid-cols-3 pb-4 md:pb-0 border-b-2 border-gray-600'}>
            <p className={'my-4 font-bold'}>Meddle Python Developer</p>
            <p className={'text-gray-400 self-center'}>1-3 года</p>
            <p className={'text-[#24cd03] self-center font-bold'}>от 1100$</p>
          </div>
          <div className={'grid md:grid-cols-3 pb-4 md:pb-0 border-b-2 border-gray-600'}>
            <p className={'my-4 font-bold'}>Senior Python Developer</p>
            <p className={'text-gray-400 self-center'}>3-5 лет</p>
            <p className={'text-[#24cd03] self-center font-bold'}>от 2100 $</p>
          </div>
          <div className={'grid md:grid-cols-3 pb-4 md:pb-0 border-b-2 border-gray-600'}>
            <p className={'my-4 font-bold'}>Python Team Lead</p>
            <p className={'text-gray-400 self-center'}>Через 5 лет</p>
            <p className={'text-[#24cd03] self-center font-bold'}>от 2600$</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BaDescription;