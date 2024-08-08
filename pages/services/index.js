
//component

import ServiceSlider from '../../components/ServiceSlider'

import Bulb from '../../components/Bulb'

import Circles from '../../components/Circles'

//framer motion

import { motion } from 'framer-motion'

import { fadeIn } from '../../variants'


const Services = () => {
  return (
  <div className='overflow-x-auto h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
       <div className='container mx auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          { /* text*/}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4
          xl:mb-0'>
            <motion.h2 
            variants={fadeIn('up',0.2)}
            initial='hidden'
            animate='show'
            exit= "hidden"
             className='h2 xl:mt-8'>My Services <span className='text-accent2'>.</span>
            </motion.h2>
            <motion.p 
            variants={fadeIn('up',0.4)}
            initial='hidden'
            animate='show'
            exit= "hidden"
            className='md-4 max-w-[400px] mx-auto xl:px-0 text-accent  text-lg md:text-xl font-bold'>
              We offer solutions including digitization of physical documents to improve accessibility and efficiency, web and app development for responsive, high-performance platforms, professional design for visual identity, data science for insights, and legal governance consulting for compliance.
            </motion.p>
          </div>

          
          <motion.div
          variants={fadeIn('down',0.6)}
          initial='hidden'
          animate='show'
          exit= "hidden"
          className='w-full xl:max-w-[65%]'>
          { /* slider */}
          <ServiceSlider />
          </motion.div>

        </div>
       </div>
      <Bulb />
    </div>
  );
};

export default Services;
