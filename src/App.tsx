import TopNav from './components/topNav';
import Textinput from './components/textinput';
import Button from './components/button'
import Checkbox from './components/checkbox'
import Card from './components/card'
import SideNav from './components/sideNav';
import AllTheThings from './components/allTheThings';
import { Route, Routes } from 'react-router-dom'

export default function App() {
  
  return (
    <>
      <TopNav/>
      <div className="flex font-mono">
        <SideNav/>
        <div className="w-full min-w-screen min-h-screen p-10 bg-matcha flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<AllTheThings/>}/>
            <Route path="/form" element={<Textinput id="input1" label="Name" />}/>
            <Route path="/button" element={<Button color="moss"/>}/>
            <Route path="/checkbox" element={<Checkbox id="checkbox1" label="thing"/>}/>
            <Route path="/card" element={<Card children={<div>a card</div>} />}/>
          </Routes>
        </div>
      </div>
    </>
  );
}