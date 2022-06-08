import React from 'react';

const About = () => {
  return (
    <div className={'flex flex-col justify-center items-center p-4 py-[80px]'}>
      <h3 className={'text-center text-3xl md:text-6xl font-bold my-8'}>Мы создаем профессионалов в IT!</h3>
      <p className={'max-w-4xl text-center text-xl md:text-4xl mb-8 text-gray-400'}>
        <span className={'font-bold text-[#24cd03]'}>Наша главная цель </span>
        - обучение всех, кто желает приобрести новую профессию,
        которая позволят им быть конкурентоспособными специалистами на рынке IT индустрии.</p>
      <p className={'max-w-4xl text-center text-xl md:text-4xl text-gray-400'}>
        <span className={'font-bold text-[#24cd03]'}>Наши преподаватели </span>
        – это практикующие специалисты с опытом работы в IT.</p>
    </div>
  );
};

export default About;