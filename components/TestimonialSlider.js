// testimonial data
const testimonialSlider = [
  {
    image: '/cropped_image_1.png',
    name: 'Danielle ',
    position: 'Customer',
    message:
      'Daque Data transformed our processes with innovative design and top-notch data solutions!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Thando Morake',
    position: 'Graphic Designer',
    message:
      'Daque Data’s expertise in digitization and development has streamlined our operations seamlessly',
  },
  {
    image: '/t-avt-3.png',
    name: 'Lerato',
    position: 'Customer',
    message:
      'Daque Data made tech easy and fun, from digitizing to designing!',
  },
];

//import swiper and react components

import { Swiper , SwiperSlide } from 'swiper/react' 

//import Swiper Styles

import 'swiper/css'
import 'swiper/css/navigation'
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

import { FaQuoteLeft } from 'react-icons/fa'

//import Required modules

import { Pagination,Navigation } from 'swiper'

//
import  Image  from 'next/image'


// data
// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    
  ],
};

const TestimonialSlider = () => {
  return <Swiper 

  navigation={true}
  pagination={{
    clickable: true,
  }}

  modules={{Navigation,Pagination}}
  className='h-[400px]'
  >
    {
      testimonialSlider.map((person,index)=>{
        return (
        <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full
          px-16'>
            {/* avatar,person,position */}
            <div className='w-full max-w-[300px] flex flex-col xl:justify-center
            items-center relative mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center text-center'>

              {/* avatar */}
              <div className='mb-2 mx-auto'>
                <Image src={person.image} width={100} height={100} alt=''/>
              </div>
              <div>avatar image</div>
              {/* name */}
              <div className='text-lg'> {person.name}</div>
               {/* position */}
               <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>

               </div>
            </div>
            {/* quote 5 messages*/}
            <div className='flex-1 flex flex-col justify-center
            before:w-[1px] xl:before:bg-black xl:before:absolute xl:before:left-0
            xl:before:h-[200px] relative xl:pl-20'>
              {/* quote icon */}
              <div className='mb-4'>
                <FaQuoteLeft className='text-4xl xl:text-6xl text-accent1 mx-auto
                md:mx-0'/>
              </div>
              {/* message */}
              <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
            </div>
          </div>
        </SwiperSlide>  
        )// end of swiper slide  // end of map function  // end of return statement  // end of SwiperSlide component  // end of Swiper component  // end of ServiceSlider component  // end of serviceData array  // end of serviceData map function  // end of serviceData.map function  // end of serviceData const  // end of ServiceSlider function  // end of ServiceSlider component  // end of
      })
    }
  
  </Swiper>;
};

export default TestimonialSlider;




