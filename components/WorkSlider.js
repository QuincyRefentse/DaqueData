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

import { BsArrowRight } from 'react-icons/bs'

//import Required modules

import { Pagination } from 'swiper'

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

const WorkSlider = () => {
  return <Swiper 

  spaceBetween={10}


  pagination={{
    clickable: true,
  }}

  modules={{Pagination}}
  className='h-[280px] sm:h-[480px]'
  >
    {
      workSlider.slides.map((slide,index)=>{
        return (
        <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
          {slide.images.map((image,index)=>{
            // eslint-disable-next-line react/jsx-key
            return ( <div key={index} className='relative rounded-lg overflow-hidden flex 
            items-center justify-center group'>
              <div className='flex items-center justify-center relative
              overflow-hidden group'>
                {/* image*/}
                <Image src={image.path} width={1200} height={800} layout='responsive' alt=''/>

                {/* overlay gradient*/}
                <div className='absolute inset-0 bg-gradient-to-l
                from-transparent via-[#23abff] to-[#ff238d] opacity-0
                group-hover:opacity-80 transition-all duration-700'></div>
                {/* title */}
                <div className='absolute bottom-0 text-white translate-y-full
                group-hover:translate-y-10 group-hover:xl:-translate-y-20 transition-all
                duration-300'>
                  <div className='items-center gap-x-2 text-[13px] tracking-[0.2em] '>
                    {/*title  part 1*/}
                    <div className='delay-100'>LIVE SITE</div>

                     {/*title  part 1*/}
                     <div className='translate-y-[500%] group-hover:translate-y-0
                     transition-all duration-300 delay-150'>LIVE SITE</div>

                     {/*icon*/}
                     <div className='text-xl translate-y-[500%]
                     group-hover:translate-y-0'><BsArrowRight/></div>
                  </div>
                </div>
              </div>
            </div>)
            
          })}
          </div>
        </SwiperSlide>  
        )// end of swiper slide  // end of map function  // end of return statement  // end of SwiperSlide component  // end of Swiper component  // end of ServiceSlider component  // end of serviceData array  // end of serviceData map function  // end of serviceData.map function  // end of serviceData const  // end of ServiceSlider function  // end of ServiceSlider component  // end of
      })
    }
  
  </Swiper>;
};

export default WorkSlider;



