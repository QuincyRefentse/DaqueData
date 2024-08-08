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

import { FaHeadset } from 'react-icons/fa'

import { MdOutlineAnalytics } from "react-icons/md";
//import Required modules

import { FreeMode,Pagination } from 'swiper'



// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Digitisation',
    description: 'We specialize in digitizing physical documents to streamline workflows and enhance data accessibility. Converting paper records into structured digital formats improves storage and retrieval, ensuring efficient management while maintaining data integrity and security.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: "Our design services enhance your brand's visual identity and user experience. We create engaging graphics, user interfaces, and cohesive branding strategies. Our design solutions align with your business goals, offering a professional and effective visual representation.",
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: "We provide web and app development services, creating responsive websites and mobile applications. Integrating intuitive design with advanced technology, we build scalable, high-performance solutions that engage users and drive results, ensuring effective and versatile digital platforms.",
  },
  {
    icon: <MdOutlineAnalytics />,
    title: 'Data Analytics',
    description: 'We offer data science services to transform data into actionable insights. Utilizing advanced analysis, machine learning, and statistical modeling, we help organizations make informed decisions and drive innovation, improving operational efficiency with strategic data-driven approaches.',
  },
  {
    icon: <FaHeadset />,
    title: 'Consulting',
    description: 'Our legal governance consulting helps organizations navigate regulatory requirements and ensure compliance. We provide expert guidance on risk management and legal frameworks, offering tailored solutions to streamline processes, mitigate risks, and uphold governance standards effectively.',
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
            <p className='max-w-[350px] leading-normal text-black' style={{ fontSize: '0.8rem' }}>
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
