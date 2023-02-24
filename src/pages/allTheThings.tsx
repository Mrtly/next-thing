import Divider from '../components/divider';
import Textinput from '../components/textinput';
import Button from '../components/button'
import Checkbox from '../components/checkbox'
import Tooltip from '../components/tooltip'
import Card from '../components/card'
import Spinner from '../components/spinner'
import Modal from '../components/modal';
import useModal from "../hooks/useModal";

export default function AllTheThings() {

  const { isOpen, toggle } = useModal();

  return <div>
    <h1 className="font-ubuntu text-sm text-slate-600">
    demo of all components
    </h1>
  
    <div className="mt-5">
      button component with color prop
      <div className="mt-5 flex flex-wrap lg:flex-nowrap gap-2 lg:gap-4 items-center">
      {['berry', 'storm', 'cloudy','sea', 'sky'].map((item,index)=>{
        return <Button key={index} color={item} className=""/>
      })}
    </div>

    <Divider/>
    spinner/loading component
    <Spinner />

    <Divider/>
    tooltip:
    <Tooltip displayText="hover to reveal!" tooltipText="tooltip example revealed!" />
  
    <Divider/>
    card component with children (slot)
    <Card children={<div>some content in the card</div>} />

    <Divider/>
    modal component  
    <Button color="sky" displayText="show modal" className="mt-2" onClick={toggle}/> 
    <Modal isOpen={isOpen} toggle={toggle}>sample modal!</Modal>

    <Divider/>
    text input component
    <Textinput id="input1" label="Name" onValueChange={(e) => console.log(e)}/>
  
    <Divider/>
    checkbox component
    <Checkbox id="cb1" label="thing" />

    <Divider/>
    </div>
  </div>
}