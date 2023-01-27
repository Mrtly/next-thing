import { ChangeEvent } from 'react';
import { useState } from 'react';

function Checkbox(props: { 
  id: string;
  label: string;
  value?: boolean;
  onValueChange?: (newType: boolean) => void; }) {
    const [isChecked, setIsChecked] = useState(props.value || false);
  
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      setIsChecked(!isChecked)
      props.onValueChange?.(isChecked)
    }
    
    return (
      <div>
        <label htmlFor={props.id}>
          <input
            type="checkbox"
            id={props.id}
            name={props.id}
            checked={isChecked}
            className="border border-slate-900"
            onChange={handleChange}
          />
          <span className={`ml-2 text-slate-900 ${isChecked && "line-through" }`}>
            {props.label} 
          </span> 
        </label>
      </div>
    );
  }
  

export default Checkbox;