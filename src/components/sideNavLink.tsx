import { NavLink } from 'react-router-dom'

type NavLinkProps = {
  to: string,
  displayText: string
}

export default function SideNavLink(props: NavLinkProps) {
  
  return (
    <NavLink to={props.to} 
      className={({ isActive }) => [
        "px-1 lg:px-3 py-2 border-b border-matcha block",
        isActive ? "text-moss font-semibold" : "text-pine hover:underline"
      ].join(" ")
    }>
      {props.displayText}
    </NavLink>
  );
}
