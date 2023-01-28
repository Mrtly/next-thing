type CardProps = {
  children: string | JSX.Element | JSX.Element[] 
}

export default function Card({ children }: CardProps ) {
  
  return (
    <div className="rounded max-w-max shadow-md p-6 bg-slate-50">
      {children}
    </div>
  );
}