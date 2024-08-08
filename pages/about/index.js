/* eslint-disable react/jsx-key */
import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPython,
  FaDatabase,
  FaBootstrap,
  FaBootstrapAlt,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaNpm
  
  
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiPandas,
  SiJupyter,
  SiTableau,
  SiPowerbi,
  SiMysql,
  SiTailwindcss,
  SiDocker,
  SiFlutter,
  SiMongodb,
  SiNodeJs,
  SiFirebase

} from "react-icons/si";



//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Data Analysis',
        icons: [
         
          <FaPython />,
          <SiPandas/>,
          <SiJupyter />,
          <SiTableau />,
          <SiPowerbi />,
          <SiMysql />,
          <FaDatabase />,
        ],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaReact />,
          <SiNextdotjs />,
          <FaNpm />,
          <FaGit />,
          <SiTailwindcss />,
          <SiDocker />,
          <SiFlutter />,
          <SiMongodb />,
          
      ],
      },
      {
        title: 'App Development',
        icons: [<SiFlutter />,<FaReact />,<SiFirebase/>],
      },
    ],
  },
  {/*
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  */},
  {
    title: 'experience',
    info: [
      {
        title: 'Data Scientist - ABT technology',
        stage: '2021 - 2023',
      },
      {
        title: 'Web Developer - Bridgestone , Freeelancing',
        stage: '2020 - 2024',
      },
      {
        title: 'App Developer - Bridgestone ,Freelancing',
        stage: '2021 - 2024',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'App Development - Udemy',
        stage: '2022',
      },
      {
        title: 'Computer Science Diploma - Damelin ',
        stage: '2021',
      },
      {
        title: ' Graphic Designer - Udemy',
        stage: '2018',
      },
    ],
  },
];

//components

import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

//framer motion

import {motion} from 'framer-motion'

import {fadeIn} from '../../variants'

//counters

import CountUp from 'react-countup'

const About = () => {


  const [index, setIndex] = useState(0)

  console.log(index)
  return <div className='overflow-x-auto h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img*/}
      <motion.div 
      variants={fadeIn('right',0.2)} 
      initial='hidden' 
      animate="show"
      exit="hidden"
      className='hidden xl:first absolute bottom-0 -left-[370px]'>
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row
      gap-x-6'>

        {/* text */}
      <div className='flex-1 flex flex-col justify-center '>
       <br/>
       <br/>
       <br/>
       
       <motion.h2 
        className='h2'
        variants={fadeIn('right',0.2)} 
        initial='hidden' 
        animate="show"
        exit="hidden"
       >Transforming <span className='text-accent1'>data</span> into <span className='text-accent1'>digital</span> excellence</motion.h2>
       <br/>
       <motion.p
        variants={fadeIn('right',0.4)} 
        initial='hidden' 
        animate="show"
        exit="hidden"
        className='max-w-[500] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-accent  text-xl md:text-2xl font-bold'>
        <h3 className='h3'>Daque Data Mission and Vision </h3> 
       <br/>
       
       At Daque Data, we aim to empower a sustainable future through digital transformation.
        We deliver advanced digital solutions to help organizations thrive, reduce environmental impact, enhance efficiency, and foster innovation.
        Our goal is to make a lasting impact on our clients, communities, and the environment.
       
       </motion.p>

       {/* counters */}
       <motion.div
        variants={fadeIn('right',0.6)} 
        initial='hidden' 
        animate="show"
        exit="hidden"
        className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0
       mb-8'>
        <div className='flex flex-1 xl:gap-x-6'>
          {/* experience*/}
          <div className='relative flex-1 after:w-[1px] after:h-full
          after:bg-white/10 after:absolute after:top-0 after:right-0'>
          <div className='text-2xl xl:text-4xl font-extrabold text-accent1 mb-2'>
            <CountUp start={0} end={10} duration={5}/> +
          </div>
          <div className='text-xs uppercase tracking-[1px] leading-[1.4]
          max-w-[100px]'>Years of experience
          </div>
        </div>

         {/* Clients*/}
         <div className='relative flex-1 after:w-[1px] after:h-full
          after:bg-white/10 after:absolute after:top-0 after:right-0'>
          <div className='text-2xl xl:text-4xl font-extrabold text-accent1 mb-2'>
            <CountUp start={0} end={180} duration={5}/> +
          </div>
          <div className='text-xs uppercase tracking-[1px] leading-[1.4]
          max-w-[100px]'>Satisfied Clients
          </div>
        </div>

         {/* Projects*/}
         <div className='relative flex-1 after:w-[1px] after:h-full
          after:bg-white/10 after:absolute after:top-0 after:right-0'>
          <div className='text-2xl xl:text-4xl font-extrabold text-accent1 mb-2'>
            <CountUp start={0} end={550} duration={5}/> +
          </div>
          <div className='text-xs uppercase tracking-[1px] leading-[1.4]
          max-w-[100px]'>Finished Projects
          </div>
        </div>

        </div>
       </motion.div>

      </div>
        {/* Info */}
       <motion.div
        variants={fadeIn('left',0.4)} 
        initial='hidden' 
        animate="show"
        exit="hidden"
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'> 
          {aboutData.map((item, itemIndex) => {

            return <div 
            key={itemIndex} 
            className={`${index === itemIndex && 
              'text-accent1 after:w-[100%] after:bg-accent2 after:transition-all after:duration-300'
              
            } cursor-pointer capitalize
            text-xl xl:text-xl relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1
            after:left-0 `}
            
            onClick={()=> setIndex(itemIndex)}
            >
              {item.title}
            </div>
            
          })}
        </div>

        <div className=' py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
        items-center xl:items-start'>

        {aboutData[index].info.map((item, itemIndex)=>{

          return <div key={itemIndex} className='flex-1 flex flex-col md:flex-row
                  max-w-max gap-x-2 items-center text-accent'>
              {/* title */}

              <div className='font-light md-2 md:mb-0'>{item.title}</div>
              <div className='hidden md:flex'>-</div>
              <div>{item.stage}</div>
              <div className='flex gap-x-4'>
              {/* icons */}
              {item.icons?.map((icon, itemIndex)=>{ 
                return <div className='text-2xl transition-all duration-500' key={itemIndex} >{icon}</div>;
              })}
              </div>
          </div>
        }) }
        </div>
        </motion.div>
      </div>
    </div>;
};

export default About;
