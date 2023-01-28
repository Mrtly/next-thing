import SideNavLink from './sideNavLink';

export default function SideNav() {
  return (
    <nav className="w-48 shadow-md border-r border-slate-300 px-4">
      <ul>
        <li><SideNavLink to="/" displayText="All"/></li>
        <li><SideNavLink to="/button" displayText="Button"/></li>
        <li><SideNavLink to="/form" displayText="TextInput"/></li>
        <li><SideNavLink to="/checkbox" displayText="CheckBox"/></li>
        <li><SideNavLink to="/card" displayText="Card"/></li>
      </ul>      
    </nav>
  );
}