type ButtonProps = {
  color?: string;
  className?: string;
  displayText?: string;
  small?: boolean;
  children?: string | JSX.Element | JSX.Element[];
  onClick?: () => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={[
        `flex items-center justify-center rounded-full 
      tracking-wider text-white shadow hover:shadow-lg bg-${
        props.color || "yin"
      }
      transition-all duration-150 active:scale-[.98] active:bg-slate-700 ${
        props.className
      }`,
        props.small ? "px-3 py-1 text-sm" : "min-w-[80px] px-6 py-2",
      ].join(" ")}
    >
      {props.children || props.displayText || props.color}
    </button>
  );
}
