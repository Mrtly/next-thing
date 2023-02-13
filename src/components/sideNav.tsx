import Divider from './divider';
import SideNavLink from './sideNavLink';

export default function SideNav() {
  
  return (
    <nav className="shadow-md border-r border-slate-300 px-2 lg:px-6">
      <div className="font-medium text-moss my-4">Components</div>
      <ul>
        <li><SideNavLink to="/" displayText="All"/></li>
        <li><SideNavLink to="/components/button" displayText="Button"/></li>
        <li><SideNavLink to="/components/input" displayText="TextInput"/></li>
        <li><SideNavLink to="/components/checkbox" displayText="CheckBox"/></li>
        <li><SideNavLink to="/components/card" displayText="Card"/></li>
        <li><SideNavLink to="/components/modal" displayText="Modal"/></li>
        <li><SideNavLink to="/components/tooltip" displayText="Tooltip"/></li>
      </ul>  
      <Divider/>
      <div className="font-medium text-moss my-4">D3 Samples</div>
      <ul>
        <li><SideNavLink to="/d3-samples/bar" displayText="Bar"/></li>
        <li><SideNavLink to="/d3-samples/line" displayText="Line"/></li>
        <li><SideNavLink to="/d3-samples/scatterplot" displayText="Scatterplot"/></li>
        <li><SideNavLink to="/d3-samples/map" displayText="Map"/></li>
      </ul>    
    </nav>
  );
}