import { useState } from 'react';
import Divider from '../components/divider';
import Textinput from '../components/textinput';
import Button from '../components/button'
import Checkbox from '../components/checkbox'
import Tooltip from '../components/tooltip'
import Card from '../components/card'

export default function AllTheThings() {

  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => {
    setShowModal(true)
  }

  return <div>
    <h1 className="font-ubuntu text-sm text-slate-600">
    demo of all components
    </h1>
  
    <div className="mt-5">
      button component with color prop
      <div className="mt-5 flex flex-wrap lg:flex-nowrap gap-2 lg:gap-4 items-center">
      {['wine', 'moss', 'pine', 'bark', 'lavender', 'goldleaf'].map((item,index)=>{
        return <Button key={index} color={item} className=""/>
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
    tooltip:
    <Tooltip displayText="what is this?" tooltipText="tooltip example revealed!" />
    
    <Divider/>
    </div>
  </div>
}