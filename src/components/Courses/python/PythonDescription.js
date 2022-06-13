import React from 'react';

const PythonDescription = () => {
  return (
    <>
      <section className={'py-[80px] px-8 max-w-[1240px] mx-auto'}>
        <h2 className={'text-center text-3xl md:text-6xl font-bold mb-8'}>О курсе</h2>
        <p className={'md:text-2xl text-md text-gray-400'}>
          <span className={'text-[#24cd03] font-bold'}>Python </span>
          один из лучших для обучения с нуля. Простой синтаксис и высокая скорость разработки – все, что нужно для
          разработки широкого спектра web-приложений.</p>
        <p className={'my-4 font-bold'}>В ходе курса вы :</p>
        <ul className={'list-disc pl-4 text-gray-400 md:text-xl text-md'}>
          <li>изучите экосистемы Python и фундаментальные принципы программирования;</li>
          <li>разберетесь в процедурном и объектно-ориентированном программировании;</li>
          <li>разработаете web-приложение на Django;</li>
          <li>будете знать концепции тестирования;</li>
          <li>научитесь работать с файлами и базами данных;</li>
          <li>станете востребованным Python разработчиком;</li>
        </ul>
        <p className={'my-4 font-bold'}>После прохождения курса вы сможете:</p>
        <ul className={'list-disc pl-4 text-gray-400 md:text-xl text-md'}>
          <li>получить востребованную профессию;</li>
          <li>использовать один из популярный язык программирования;</li>
          <li>уверенно владеть стеком технологий на основе Python;</li>
          <li>разбираться в методах проектирования и построения проектов;</li>
          <li>создавать качаственный програмный код под любые задачи проектов;</li>
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

export default PythonDescription;