import Logo from './components/logo';
import Divider from './components/divider';
import Textinput from './components/textinput';
import Button from './components/button'
import Checkbox from './components/checkbox'
import LearningList from './components/learningList'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <div className='h-16 px-4 flex items-center bg-black shadow-lg text-white'> 
      <Logo /> <span className='font-mono font-semibold ml-3'>Playground</span> 
    </div>
    <div className="flex font-mono">
      <nav className="w-48 shadow-md border-r border-slate-300">
        <ul className='flex flex-col'>
        <li><Link to="/" className="py-3 px-6 border-b w-full block">All</Link></li>
        <li><Link to="/button" className="py-3 px-6 border-b w-full block">Button</Link></li>
        <li><Link to="/form" className="py-3 px-6 border-b w-full block">Input</Link></li>
        <li><Link to="/checkbox" className="py-3 px-6 border-b w-full block">Checkbox</Link></li>
        </ul>
      </nav>
      <div className="w-screen min-h-screen p-10 bg-slate-200 flex flex-col items-center justify-center">

      <Routes>
        <Route path="/" element={
          <div className="">
            <h1 className="absolute top-20 left-48 font-mono text-xl text-blue-500">
              demo of all components
            </h1>
            
            <div>
              button component with color prop
              <div className="mt-5 flex items-center">
              {['blue', 'purple', 'pink'].map((item,index)=>{
                return <Button key={index} color={item} className="mx-4"/>
              })}
            </div>

            <Divider/>
            text input component
            <Textinput id="input1" label="Name" onValueChange={(e) => console.log(e)}/>
            

            <Divider/>
            checkbox component
            <Checkbox id="cb1" label="thing" />

            <Divider/>
            
            <LearningList />
            
            </div>
          </div>}/>
        <Route path="/form" element={<Textinput id="input1" label="Name" />}/>
        <Route path="/button" element={<Button color="blue"/>}/>
        <Route path="/checkbox" element={<Checkbox id="checkbox1" label="thing"/>}/>
      </Routes>
      </div>
      </div>
    </>
    
  );
}



export default App;
