type ButtonProps = { 
  color?: string, 
  className?: string,
  displayText?: string,
  children?: string | JSX.Element | JSX.Element[],
  onClick?: () => void }

export default function Button(props: ButtonProps) {

  return <button
    onClick={props.onClick}
    className={`h-10 min-w-[80px] px-6 flex items-center justify-center rounded-full shadow hover:shadow-lg bg-${props.color||'moss'} active:bg-slate-700 active:scale-[.95] transition-all duration-150 text-slate-100 ${props.className}`}>
      {props.children || props.displayText || props.color}
    </button>
}