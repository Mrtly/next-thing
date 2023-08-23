type CardProps = {
  children: string | JSX.Element | JSX.Element[],
  className?: string
}

export default function Card(props: CardProps) {
  
  return (
    <div className={`rounded max-w-max shadow-md p-6 bg-slate-50 ${props.className}`}>
      {props.children}
    </div>
  );
}