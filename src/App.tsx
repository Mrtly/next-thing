import './App.css';
import Logo from './components/logo/logo';
import NameForm from './components/nameForm/nameForm';
import Box from './components/box/box'

function App() {
  return (
    <div className="h-screen bg-slate-200 flex flex-col items-center justify-center">

      <h1 className="font-mono text-3xl text-blue-500">
        Hello 
      </h1>

      <Logo />

      <NameForm />

     <div className="mt-5 flex items-center">
        {['blue', 'purple', 'pink'].map((item,index)=>{
          return <Box key={index} color={item} className="mx-4"/>
        })}
      </div>
    </div>
  );
}



export default App;
