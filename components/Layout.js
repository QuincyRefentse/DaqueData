// fonts 

import { Sora , Squada_One } from "next/font/google"



//font settings

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable : '--font-sora',
  weight : ['100','200','300','400','500','600','700','800']
})

const squada = Squada_One({
  subsets: ['latin'],
  variable: '--font-squada',
  weight: ['400'], // Squada One only has regular weight
});



//components

import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'

const Layout = ({children}) => {
  return (
  <div className={`page bg-white text-black bg-cover bg-no-repeat ${sora.variable} ${squada.variable} 
  font-squada relative   `}>

    {/*<TopLeftImg /> */}
    
    <Nav />
    <Header />
    {children}
  </div>
  );
};

export default Layout;
