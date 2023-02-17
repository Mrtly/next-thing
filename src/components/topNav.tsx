import Logo from './logo';
import { NavLink } from 'react-router-dom'

export default function TopNav() {
  
  return (
    <div className='h-20 px-4 flex items-center bg-bark shadow-lg text-white'> 
      
      <NavLink to="/">
        <div className="flex items-center">
          <Logo /> 
          <span className='font-ubuntu font-semibold text-2xl ml-3'>
            Playground
          </span> 
        </div>
      </NavLink>
    </div>
  );
}