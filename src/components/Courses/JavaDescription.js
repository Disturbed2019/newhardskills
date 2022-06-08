import React from 'react';

const JavaDescription = () => {
  return (
    <>
      <section className={'py-[80px] px-8 max-w-[1240px] mx-auto'}>
          <h2 className={'text-center text-3xl md:text-6xl font-bold mb-8'}>О курсе</h2>
          <p className={'md:text-2xl text-md text-gray-400'}>
            <span className={'text-[#24cd03] font-bold'}>Java </span>
            на сегодняшний день является одним из самых популярных языков программирования, который позволяет создавать
            различные приложения: веб-сайты и веб-сервисы, десктопные программы, мобильные приложения для
            ОС Андроид и многое другое. Работает на всех платформах (Windows, Mac, Linux)</p>
          <p className={'my-4 font-bold'}>В ходе курса вы :</p>
          <ul className={'list-disc pl-4 text-gray-400 md:text-xl text-md'}>
            <li>сможете применять поулченые знания на практике;</li>
            <li>получите знания языков разметки HTML, XML;</li>
            <li>разберетесь в обьектно - ориентируемом программировании;</li>
            <li>научитесь писать интересные алгоритмы, работать с коллекциями, файлами и др.;</li>
            <li>разработаете парочку многопоточных приложений;</li>
            <li>освоите работу с базами данных;</li>
            <li>изучите самые популярные фреймворки - Spring и Hibernate.</li>
          </ul>
          <p className={'my-4 font-bold'}>После прохождения курса вы сможете:</p>
          <ul className={'list-disc pl-4 text-gray-400 md:text-xl text-md'}>
            <li>получить востребованную профессию;</li>
            <li>использовать популярный язык программирования и фреймворки;</li>
            <li>уверенно владеть стеком технологий на основе Java;</li>
            <li>разбираться в методах проектирования и построения проектов;</li>
            <li>создавать качаственный програмный код под любые задачи проектов;</li>
          </ul>
      </section>
      <section className={'py-[80px] px-8 max-w-[1240px] mx-auto'}>
        <h2 className={'text-center text-3xl md:text-6xl font-bold mb-8'}>Карьерный рост</h2>
        <div className={'text-center md:text-xl text-md'}>
          <div className={'grid md:grid-cols-3 pb-4 md:pb-0 border-b-2 border-gray-600'}>
            <p className={'my-4 font-bold'}>Junior Java Developer</p>
            <p className={'text-gray-400 self-center'}>После обучения</p>
            <p className={'text-[#24cd03] self-center font-bold'}>от 600 $</p>
          </div>
          <div className={'grid md:grid-cols-3 pb-4 md:pb-0 border-b-2 border-gray-600'}>
            <p className={'my-4 font-bold'}>Meddle Java Developer</p>
            <p className={'text-gray-400 self-center'}>1-3 года</p>
            <p className={'text-[#24cd03] self-center font-bold'}>от 1100$</p>
          </div>
          <div className={'grid md:grid-cols-3 pb-4 md:pb-0 border-b-2 border-gray-600'}>
            <p className={'my-4 font-bold'}>Senior Java Developer</p>
            <p className={'text-gray-400 self-center'}>3-5 лет</p>
            <p className={'text-[#24cd03] self-center font-bold'}>от 2400 $</p>
          </div>
          <div className={'grid md:grid-cols-3 pb-4 md:pb-0 border-b-2 border-gray-600'}>
            <p className={'my-4 font-bold'}>Java Team Lead</p>
            <p className={'text-gray-400 self-center'}>Через 5 лет</p>
            <p className={'text-[#24cd03] self-center font-bold'}>от 3300$</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default JavaDescription;