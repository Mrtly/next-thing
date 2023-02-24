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
    <h1 className="text-storm">
    a demo of all components
    </h1>
  
    <div className="mt-5">
    <div className="text-storm font-thin">button component with color prop</div>
      <div className="mt-5 flex flex-wrap lg:flex-nowrap gap-2 lg:gap-4 items-center">
      {['berry', 'storm', 'cloudy','sea', 'sky'].map((item,index)=>{
        return <Button key={index} color={item} className=""/>
      })}
    </div>

    <Divider/>
    <div className="text-storm font-thin">spinner/loading component</div>
    <Spinner />

    <Divider/>
    <div className="text-storm font-thin">tooltip</div>
    <Tooltip displayText="hover to reveal!" tooltipText="tooltip example revealed!" />
  
    <Divider/>
    <div className="text-storm font-thin">card component with children (slot)</div>
    <Card children={<div>some content in the card</div>} />

    <Divider/>
    <div className="text-storm font-thin">modal component</div>  
    <Button color="sky" displayText="show modal" className="mt-2" onClick={toggle}/> 
    <Modal isOpen={isOpen} toggle={toggle}>sample modal!</Modal>

    <Divider/>
    <div className="text-storm font-thin">text input component</div>
    <Textinput id="input1" label="Name" />
  
    <Divider/>
    <div className="text-storm font-thin">checkbox component</div>
    <Checkbox id="cb1" label="thing" />

    <Divider/>
    </div>
  </div>
}