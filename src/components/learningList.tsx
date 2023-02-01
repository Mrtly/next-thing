import Checkbox from './checkbox'

export default function LearningList() {

  const learningListItems = [
    { label: 'routing', done: true },
    { label: 'local state', done: true },
    { label: 'component props, types, default values', done: true },
    { label: 'emitting to parent components', done: true },
    { label: 'slots (children)', done: true },
    { label: 'conditional rendering', done: true },
    { label: 'computed' },
    { label: 'hooks' },
    { label: 'lifecycle methods' },
    { label: 'global state w Redux' }
  ]

  return <div>
    <div>learning list</div> 
    <div className="text-sm text-slate-500">(things that are done a little differently in Vue)</div>
    <div className="mt-3">
      {learningListItems.map((item,index)=>{
        return <Checkbox key={index} id={index.toString()} label={item.label} value={item.done} />
      })}
    </div> 
  </div>
}