import { ChangeEvent } from 'react';
import { useState } from 'react';

function FaffInput(props: { 
  id: string;
  label: string;
  onValueChange?: (newValue: string) => void; }) {
    const [name, setName] = useState('Mrtl');
  
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      setName(event.target.value)
      props.onValueChange?.(event.target.value)
    }
    
    return (
      <div>
        <label htmlFor={props.id}>
          <span className="font-semibold text-slate-900"> {props.label} </span> 
          <input
            id={props.id}
            name={props.id}
            type="text"
            value={name}
            className="block bg-slate-50 p-2 border border-slate-500"
            onChange={handleChange}
          />
        </label>
        <div className="mt-2 h-6 text-sm text-slate-400">value: {name}</div>
      </div>
    );
  }
  

export default FaffInput;