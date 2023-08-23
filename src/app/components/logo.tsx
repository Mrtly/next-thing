import logo from '../../../public/next.svg'
import Image from 'next/image'

export default function Logo() {
 
  return <Image
    src={logo} 
    className="w-12 h-12 animate-wiggle" 
    alt="logo" 
  />
}
