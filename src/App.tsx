import TopNav from './components/topNav';
import Divider from './components/divider';
import Textinput from './components/textinput';
import Button from './components/button'
import Checkbox from './components/checkbox'
import LearningList from './components/learningList'
import Card from './components/card'
import SideNav from './components/sidenav';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <TopNav/>
      <div className="flex font-mono">
        <SideNav/>
        <div className="w-screen min-h-screen p-10 bg-indigo-50 flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={
              <div>
                <h1 className="absolute top-20 left-48 font-mono text-sm text-slate-600">
                 demo of all components
                </h1>
                
                <div className="mt-10">
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
                card component with children (slot)
                <Card children={<div>some content in the card</div>} />

                <Divider/>
                
                <LearningList />

                </div>
              </div>}/>

            <Route path="/form" element={<Textinput id="input1" label="Name" />}/>
            <Route path="/button" element={<Button color="blue"/>}/>
            <Route path="/checkbox" element={<Checkbox id="checkbox1" label="thing"/>}/>
            <Route path="/card" element={<Card children={<div>a card</div>} />}/>
          </Routes>
        </div>
      </div>
    </>
    
  );
}

export default App;