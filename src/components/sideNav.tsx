import Divider from './divider';
import SideNavLink from './sideNavLink';

export default function SideNav() {
  
  return (
    <nav className="shadow-md bg-matcha border-r border-slate-300 px-4 lg:px-6 text-lg">
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
      <div className="font-medium text-moss my-4 whitespace-nowrap">Data Viz Samples</div>
      <ul>
        <li><SideNavLink to="/samples/leaflet-map" displayText="Leaflet Map"/></li>
        <li><SideNavLink to="/samples/d3-map" displayText="D3 Map"/></li>
        <li><SideNavLink to="/samples/d3-scatterplot" displayText="D3 Scatterplot"/></li>
        <li><SideNavLink to="/samples/d3-bar" displayText="D3 Bar"/></li>
        <li><SideNavLink to="/samples/d3-line" displayText="D3 Line"/></li>
      </ul>    
    </nav>
  );
}