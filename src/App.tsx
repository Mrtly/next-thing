import React from 'react';
import './App.css';
import Logo from './components/logo/logo';

function App() {
  return (
    <div className="h-screen bg-slate-200 flex items-center justify-center">

      <h1 className="font-mono text-3xl text-blue-500">
        Hello 
      </h1>

      <Logo />
    </div>
  );
}

export default App;
