//next image

import Image from "next/image";


const Avatar = () => {


  return <div className="hidden xl:flex xl:max-w-none xl:justify-center xl:items-center w-full" >
    <Image 
    src={'/DaqueData.png'} 
    width={737} 
    height={678} 
    alt=''
   
    className="translate-z-0 w-2/5  h-auto"/>
    </div>;
};

export default Avatar;
