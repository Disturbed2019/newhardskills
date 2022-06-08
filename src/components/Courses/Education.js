import React from 'react';
import edu_1 from '../../assets/images/edu_1.jpg'
import edu_2 from '../../assets/images/edu_2.jpg'
import {BsHddNetwork, BsFileRichtext} from "react-icons/bs";
import {BiMailSend} from "react-icons/bi";
import {IoMdContacts, IoMdContact} from "react-icons/io";
import {AiOutlineMessage} from "react-icons/ai";


const Education = () => {
  return (
    <section className={'py-[80px] px-8 max-w-[1240px] mx-auto'}>
      <h2 className={'text-center text-3xl md:text-6xl font-bold mb-8'}>Как проходит обучение</h2>
      <div className={'grid md:grid-cols-2 text-center my-10 gap-x-8'}>
        <img src={edu_1} alt="" width={460} height={460} className={'hidden md:block'}/>
        <div className={' text-md sm:text-sm md:text-xl  flex flex-col justify-evenly'}>
          <div className={'flex flex-col md:flex-row justify-center md:justify-between items-center  my-4 md:my-0 '}>
            <BsHddNetwork size={60} color={'#24cd03'} />
            <div>
              <p className={'mb-4  font-bold'}>80% практика</p>
              <p className={'text-gray-400 '}>Упор на решение реальных задач и приобретение практических навыков.</p>
            </div>
          </div>

          <div className={'flex flex-col md:flex-row justify-center md:justify-between items-center  my-4 md:my-0'}>
            <BsFileRichtext size={60} color={'#24cd03'}/>
            <div>
              <p className={'mb-4  font-bold'}>20% теория</p>
              <p className={'text-gray-400 '}>На курсах изучаем теорию дома и разбираем в начале занятия.</p>
            </div>
          </div>

          <div className={'flex flex-col md:flex-row justify-center md:justify-between items-center  my-4 md:my-0'}>
            <BiMailSend size={60} color={'#24cd03'}/>
            <div>
              <p className={'mb-4  font-bold'}>Домашние задания</p>
              <p className={'text-gray-400 '}>После каждого занятия обязательные домашние задания.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={'grid md:grid-cols-2 text-center my-10 gap-x-8'}>
        <img src={edu_2} alt="" width={460} height={460} className={'hidden md:block'}/>
        <div className={'-order-1 text-md sm:text-sm md:text-xl  flex flex-col justify-evenly'}>
          <div className={'flex flex-col md:flex-row justify-center md:justify-between items-center  my-4 md:my-0'}>
            <IoMdContacts size={60} color={'#24cd03'}/>
            <div>
              <p className={'mb-4  font-bold'}>Группы до 10 человек</p>
              <p className={'text-gray-400 '}>В спокойной атмосфере преподаватель уделяет внимание каждому учащемуся.</p>
            </div>
          </div>
          <div className={'flex flex-col md:flex-row justify-center md:justify-between items-center  my-4 md:my-0'}>
            <IoMdContact size={60} color={'#24cd03'}/>
            <div>
              <p className={'mb-4  font-bold'}>Преподаватели</p>
              <p className={'text-gray-400 '}>Преподаватели помогают каждому начинающему решать вопросы в процессе обучения.</p>
            </div>
          </div>
          <div className={'flex flex-col md:flex-row justify-center md:justify-between items-center  my-4 md:my-0'}>
            <AiOutlineMessage size={60} color={'#24cd03'}/>
            <div>
              <p className={'mb-4  font-bold'}>Online</p>
              <p className={'text-gray-400 '}>Преподаватели всегда готовы помочь вам вне занятий а так же после окончания курса.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;