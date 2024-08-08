//import swiper and react components

import { Swiper , SwiperSlide } from 'swiper/react' 

//import Swiper Styles

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'


// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopLeft,
  RxArrowTopRight,
} from "react-icons/rx";

import { MdOutlineAnalytics } from "react-icons/md";
//import Required modules

import { FreeMode,Pagination } from 'swiper'



// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Digitisation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <MdOutlineAnalytics />,
    title: 'Data Analytics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'Consulting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320:{
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640:{
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }}
  freeMode={true} 
  pagination={{
    clickable: true,
  }}
  modules={{FreeMode,Pagination}}
  className='h-[240px] sm:h-[340px]'
  >
    {
      serviceData.map((item,index)=>{
        return <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8
          flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,
          0.15)] transition-all duration-300'>
            {/* icon */}
          <div className='text-black text-4xl text-accent1 mb-4'>
            {item.icon}
          </div>
          {/*Title & Description*/}
          <div className='mb-8'>
            <div className='mb-2 text-lg text-black'>
              {item.title}
            </div>
            <p className='max-w-[350px] leading-normal text-black'>
              {item.description}
            </p>
          </div>
          {/* arrow */}
          <div className='text-3xl '>
            <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent1 
          transition-all duration-300'/>
          </div>
          </div>
        </SwiperSlide>  // end of swiper slide  // end of map function  // end of return statement  // end of SwiperSlide component  // end of Swiper component  // end of ServiceSlider component  // end of serviceData array  // end of serviceData map function  // end of serviceData.map function  // end of serviceData const  // end of ServiceSlider function  // end of ServiceSlider component  // end of
      })
    }
  
  </Swiper>;
};

export default ServiceSlider;
