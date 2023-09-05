type CardProps = {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
};

export default function Card(props: CardProps) {
  return (
    <div
      className={`max-w-max rounded bg-slate-50 p-6 shadow-md ${props.className}`}
    >
      {props.children}
    </div>
  );
}
