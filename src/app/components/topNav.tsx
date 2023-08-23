import Link from 'next/link'
import NextLogo from '../components/logo'

import Image from 'next/image'
import nextlogo from '../assets/next.svg'
import reactlogo from '../assets/react.svg'
import vercellogo from '../assets/vercel.svg'

export default function TopNav() {
  
  return (
    <div className='h-24 px-10 flex items-center bg-bark shadow-lg text-white'> 
        <div className="w-screen flex items-center justify-between">
          <div>
            <span className="font-ubuntu font-semibold text-2xl hover:text-rose transition-all duration-100"><Link href="/">Next Adventures</Link></span> 
            <span className="ml-4 tracking-wider text-sm text-white">a collection of components & data viz samples in React & Next</span>
      
          </div>
          <div className="hidden lg:flex items-center">
            {[reactlogo, nextlogo, vercellogo].map((item,index)=>{
              return <Image key={index}
              src={item} 
              className="w-12 h-8 ml-4" 
              alt="logo" 
            /> })}
          </div>
        </div>
    </div>
  );
}