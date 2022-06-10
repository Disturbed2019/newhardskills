import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import avatar from '../assets/images/teachers/avatar.jpg'


const Teachers = () => {
  return (
    <section className={'py-[80px] px-8 max-w-[1240px] mx-auto'}>
      <h2 className={'text-center text-3xl md:text-6xl font-bold mb-8'}>Наши преподаватели</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        // centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 2,

          },
          768: {
            slidesPerView: 3,

          }
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        className={'py-8'}
      >
        <SwiperSlide>
          <div className={'flex flex-col justify-center items-center text-md sm:text-sm md:text-xl text-center'}>
            <div className={'flex justify-center items-center p-2'}>
              <img src={avatar} alt="avatar" width={256} height={256} className={'rounded-full'}/>
            </div>
            <p className={'text-[#24cd03] font-bold'}>Николай</p>
            <p className={'font-bold'}>Software Engineer</p>
            <p className={'text-gray-400'}>4+ лет опыта коммерческой разработки</p>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={'flex flex-col justify-center items-center text-md sm:text-sm md:text-xl text-center'}>
            <div className={'flex justify-center items-center p-2'}>
              <img src={avatar} alt="avatar" width={256} height={256} className={'rounded-full'}/>
            </div>
            <p className={'text-[#24cd03] font-bold'}>Николай</p>
            <p className={'font-bold'}>Software Engineer</p>
            <p className={'text-gray-400'}>4+ лет опыта коммерческой разработки</p>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={'flex flex-col justify-center items-center text-md sm:text-sm md:text-xl text-center'}>
            <div className={'flex justify-center items-center p-2'}>
              <img src={avatar} alt="avatar" width={256} height={256} className={'rounded-full'}/>
            </div>
            <p className={'text-[#24cd03] font-bold'}>Николай</p>
            <p className={'font-bold'}>Software Engineer</p>
            <p className={'text-gray-400'}>4+ лет опыта коммерческой разработки</p>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={'flex flex-col justify-center items-center text-md sm:text-sm md:text-xl text-center'}>
            <div className={'flex justify-center items-center p-2'}>
              <img src={avatar} alt="avatar" width={256} height={256} className={'rounded-full'}/>
            </div>
            <p className={'text-[#24cd03] font-bold'}>Николай</p>
            <p className={'font-bold'}>Software Engineer</p>
            <p className={'text-gray-400'}>4+ лет опыта коммерческой разработки</p>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={'flex flex-col justify-center items-center text-md sm:text-sm md:text-xl text-center'}>
            <div className={'flex justify-center items-center p-2'}>
              <img src={avatar} alt="avatar" width={256} height={256} className={'rounded-full'}/>
            </div>
            <p className={'text-[#24cd03] font-bold'}>Николай</p>
            <p className={'font-bold'}>Software Engineer</p>
            <p className={'text-gray-400'}>4+ лет опыта коммерческой разработки</p>

          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Teachers;