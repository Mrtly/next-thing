type ButtonProps = { 
  color?: string, 
  className?: string,
  displayText?: string,
  small?: boolean,
  children?: string | JSX.Element | JSX.Element[],
  onClick?: () => void }

export default function Button(props: ButtonProps) {

  return <button
    onClick={props.onClick}
    className={[`flex items-center justify-center rounded-full 
      text-white tracking-wider shadow hover:shadow-lg bg-${props.color||'wood'}
      active:bg-slate-700 active:scale-[.98] transition-all duration-150 ${props.className}`,
        props.small? 'py-1 px-3 text-sm' : 'py-2 px-6 min-w-[80px]'].join(' ')}>
      {props.children || props.displayText || props.color}
    </button>
}