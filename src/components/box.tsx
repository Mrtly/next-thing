export default function Box(props:
  { color: string, className?: string }) {

  return <div 
  className={`h-20 min-w-[80px] flex items-center justify-center rounded border border-${props.color}-800 bg-${props.color}-500 text-slate-100 ${props.className}`}>
    {props.color}
  </div>

}