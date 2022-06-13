import React from 'react';

const HrDescription = () => {
  return (
    <>
      <section className={'py-[80px] px-8 max-w-[1240px] mx-auto'}>
        <h2 className={'text-center text-3xl md:text-6xl font-bold mb-8'}>О курсе</h2>
        <p className={'md:text-2xl text-md text-gray-400 pb-4'}>
          <span className={'text-[#24cd03] font-bold'}>IT рекрутинг </span>
          – престижная и востребованная профессия, которая идеально подходит для человека, который любит общение.</p>
        <p className={'md:text-2xl text-md text-gray-400 pb-4'}>Вы узнаете, как и где искать самых талантливых специалистов, и как с ними общаться. Расскажем, как правильно
          подойти к оценке личностных качеств во время телефонных и личных интервью. И как помогать людям и компаниям
          совместно достигать своих целей!</p>
        <p className={'md:text-2xl text-md text-gray-400 pb-4'}>Вы получите знания о актуальных технологиях, ключевых компаниях и специфике работы в
          продуктовых, аутсорсинговых компаний и стартапах.</p>
        <p className={'my-4 font-bold'}>В ходе курса вы :</p>
        <ul className={'list-disc pl-4 text-gray-400 md:text-xl text-md'}>
          <li>научитесь писать «продающие» письма;</li>
          <li>проведете свое первое собеседование;</li>
          <li>сможете найти кандидата при помощи различных тулов и техник сорсинга;</li>
          <li>поймете, как по резюме определить, подходит ли человек на твою вакансию;</li>
          <li>познакомитесь с технологиями и профессиями в IT;</li>
          <li>получите рекомендации, как презентовать себя на интервью;</li>
        </ul>
      </section>
      <section className={'py-[80px] px-8 max-w-[1240px] mx-auto'}>
        <h2 className={'text-center text-3xl md:text-6xl font-bold mb-8'}>Карьерный рост</h2>
        <div className={'text-center md:text-xl text-md'}>
          <div className={'grid md:grid-cols-3 pb-4 md:pb-0 border-b-2 border-gray-600'}>
            <p className={'my-4 font-bold'}>Junior IT Recruiter</p>
            <p className={'text-gray-400 self-center'}>После обучения</p>
            <p className={'text-[#24cd03] self-center font-bold'}>от 600 $</p>
          </div>
          <div className={'grid md:grid-cols-3 pb-4 md:pb-0 border-b-2 border-gray-600'}>
            <p className={'my-4 font-bold'}>Meddle IT Recruiter</p>
            <p className={'text-gray-400 self-center'}>1-3 года</p>
            <p className={'text-[#24cd03] self-center font-bold'}>от 1000$</p>
          </div>
          <div className={'grid md:grid-cols-3 pb-4 md:pb-0 border-b-2 border-gray-600'}>
            <p className={'my-4 font-bold'}>Senior IT Recruiter</p>
            <p className={'text-gray-400 self-center'}>3-5 лет</p>
            <p className={'text-[#24cd03] self-center font-bold'}>от 1500 $</p>
          </div>
          <div className={'grid md:grid-cols-3 pb-4 md:pb-0 border-b-2 border-gray-600'}>
            <p className={'my-4 font-bold'}>Team Lead IT Recruiter</p>
            <p className={'text-gray-400 self-center'}>Через 5 лет</p>
            <p className={'text-[#24cd03] self-center font-bold'}>от 2000$</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HrDescription;