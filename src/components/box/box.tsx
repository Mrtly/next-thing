export default function Box(props:
  { color: string, className?: string }) {

  return <div 
  className={`p-1 h-10 w-max border-slate-500 border bg-${props.color}-500 ${props.className}`}>
    {props.color}
  </div>

}