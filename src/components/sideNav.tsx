import SideNavLink from './sideNavLink';

export default function SideNav() {
  
  return (
    <nav className="shadow-md border-r border-slate-300 px-1 lg:px-4">
      <ul>
        <li><SideNavLink to="/" displayText="All"/></li>
        <li><SideNavLink to="/button" displayText="Button"/></li>
        <li><SideNavLink to="/form" displayText="TextInput"/></li>
        <li><SideNavLink to="/checkbox" displayText="CheckBox"/></li>
        <li><SideNavLink to="/card" displayText="Card"/></li>
        <li><SideNavLink to="/modal" displayText="Modal"/></li>
        <li><SideNavLink to="/tooltip" displayText="Tooltip"/></li>
      </ul>      
    </nav>
  );
}