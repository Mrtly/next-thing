import { NavLink } from 'react-router-dom'

type NavLinkProps = {
  to: string,
  displayText: string
}

export default function SideNavLink(props: NavLinkProps) {
  return (
    <NavLink to={props.to} 
      className={({ isActive }) => [
        "p-3 border-b w-full block",
        isActive ? "text-indigo-600 font-semibold" : "text-slate-500 hover:underline"
      ].join(" ")
    }>
      {props.displayText}
    </NavLink>
  );
}
