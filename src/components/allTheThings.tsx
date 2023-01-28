import Divider from './divider';
import Textinput from './textinput';
import Button from './button'
import Checkbox from './checkbox'
import LearningList from './learningList'
import Card from './card'

export default function AllTheThings() {
  return <div>
    <h1 className="font-mono text-sm text-slate-600">
    demo of all components
    </h1>
  
    <div className="mt-5">
      button component with color prop
      <div className="mt-5 flex flex-wrap lg:flex-nowrap gap-2 lg:gap-4 items-center">
      {['moss', 'pine', 'bark', 'lavender', 'goldleaf'].map((item,index)=>{
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
    <LearningList />
    </div>
  </div>
}