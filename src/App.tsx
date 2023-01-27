import Logo from './components/logo';
import FaffInput from './components/faffInput';
import Box from './components/box'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <div className='h-16 px-4 flex items-center bg-black shadow-lg text-white'> 
      <Logo /> <span className='font-mono font-semibold ml-3'>Playground</span> 
    </div>
    <div className="flex font-mono">
      <nav className="w-40 shadow-md border-r border-slate-300">
        <ul className='flex flex-col'>
        <li><Link to="/" className="p-2 border-b w-full block">All</Link></li>
        <li> <Link to="/form" className="p-2 border-b w-full block">Input</Link></li>
        <li><Link to="/box" className="p-2 border-b w-full block">Box</Link></li>
        </ul>
      </nav>
      <div className="w-screen h-screen bg-slate-200 flex flex-col items-center justify-center">

      <Routes>
        <Route path="/" element={
        <div className="">
          <h1 className="absolute top-20 left-40 font-mono text-2xl text-blue-500">
            demo of all components
          </h1>
            <FaffInput id="input1" onValueChange={(e) => console.log(e)}/>
            <div className="h-1 my-10 border-b border-slate-300"/>
            <div>
              box with color prop
              <div className="mt-5 flex items-center">
              {['blue', 'purple', 'pink'].map((item,index)=>{
                return <Box key={index} color={item} className="mx-4"/>
              })}
              </div>
            </div>
          </div>}/>
        <Route path="/form" element={<FaffInput id="input1"/>}/>
        <Route path="/box" element={<Box color="blue"/>}/>
      </Routes>
      </div>
      </div>
    </>
    
  );
}



export default App;
