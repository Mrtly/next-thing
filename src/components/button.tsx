export default function Box(props:
  { color: string, className?: string }) {

  const handleClick = () => {
    console.log(props.color)
  }

  return <button
    onClick={handleClick}
    className={`h-11 min-w-[80px] px-4 flex items-center justify-center rounded shadow hover:shadow-lg bg-${props.color}-700 active:bg-slate-800 text-slate-100 ${props.className}`}>
      {props.color}
    </button>
}