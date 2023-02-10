import Divider from './divider';
import SideNavLink from './sideNavLink';

export default function SideNav() {
  
  return (
    <nav className="shadow-md border-r border-slate-300 px-1 lg:px-4">
      <div className="font-medium text-moss my-4">Components</div>
      <ul>
        <li><SideNavLink to="/" displayText="All"/></li>
        <li><SideNavLink to="/button" displayText="Button"/></li>
        <li><SideNavLink to="/form" displayText="TextInput"/></li>
        <li><SideNavLink to="/checkbox" displayText="CheckBox"/></li>
        <li><SideNavLink to="/card" displayText="Card"/></li>
        <li><SideNavLink to="/modal" displayText="Modal"/></li>
        <li><SideNavLink to="/tooltip" displayText="Tooltip"/></li>
      </ul>  
      <Divider/>
      <div className="font-medium text-moss my-4">Samples</div>
      <ul>
        <li><SideNavLink to="/d3-samples" displayText="D3 Samples"/></li>
      </ul>    
    </nav>
  );
}