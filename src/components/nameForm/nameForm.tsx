import { ChangeEvent } from 'react';
import { useState } from 'react';

function NameForm() {
    const [name, setName] = useState('Mrtl');
  
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      setName(event.target.value)
    }
    
    return (
      <div>
        <input
          type="text"
          value={name}
          className="bg-slate-50 p-2 border border-blue-500"
          onChange={handleChange}
        />
        <div className="h-6 font-semibold text-slate-400">{name}</div>
      </div>
    );
  }
  

export default NameForm;