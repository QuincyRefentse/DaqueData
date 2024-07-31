//Links

import Link from 'next/link'

//Icons

import { RiLinkedinFill , RiMailFill ,RiTwitterFill } from 'react-icons/ri'



const Socials = () => {
  return (
  <div className='flex items-center gap-x-5 text-lg'>

     <Link href={''}  className='hover:text-linkedin transition-all duration-300'>
      <RiLinkedinFill/>
     </Link>
     
     <Link href={''}  className='hover:text-red-500  transition-all duration-300'>
      <RiMailFill/>
     </Link>

     <Link href={''}  className='hover:text-twitter  transition-all duration-300'>
      <RiTwitterFill/>
     </Link>
     
    </div>
    );
};

export default Socials;
