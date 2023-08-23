"use client"

import Divider from './components/divider';
import Textinput from './components/textinput';
import Button from './components/button'
import Checkbox from './components/checkbox'
import Tooltip from './components/tooltip'
import Card from './components/card'
import Spinner from './components/spinner'
import Modal from './components/modal';
import useModal from "./hooks/useModal";

export default function AllTheThings() {

  const { isOpen, toggle } = useModal();

  return <div>
    <h1 className="text-bark">
    a demo of all components
    </h1>
  
    <div className="mt-5">
    <div className="text-bark font-thin">button component with color prop</div>
      <div className="mt-5 flex flex-wrap lg:flex-nowrap gap-2 lg:gap-4 items-center">
      {['yin', 'violet', 'rose', 'coral', 'buff'].map((item,index)=>{
        return <Button key={index} color={item} className=""/>
      })}
    </div>

    <Divider/>
    <div className="text-bark font-thin">spinner/loading component</div>
    <Spinner />

    <Divider/>
    <div className="text-bark font-thin">tooltip</div>
    <Tooltip displayText="hover to reveal!" tooltipText="tooltip example revealed!" />
  
    <Divider/>
    <div className="text-bark font-thin">card component with children (slot)</div>
    <Card><div>some content in the card</div></Card>

    <Divider/>
    <div className="text-bark font-thin">modal component</div>  
    <Button color="rose" displayText="show modal" className="mt-2" onClick={toggle}/> 
    <Modal isOpen={isOpen} toggle={toggle}>sample modal!</Modal>

    <Divider/>
    <div className="text-bark font-thin">text input component</div>
    <Textinput id="input1" label="Name" />
  
    <Divider/>
    <div className="text-bark font-thin">checkbox component</div>
    <Checkbox id="cb1" label="thing" />

    <Divider/>
    </div>
  </div>
}