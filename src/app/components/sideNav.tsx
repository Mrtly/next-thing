import Divider from './divider';
import SideNavLink from './sideNavLink';

export default function SideNav() {
  
  return (
    <nav className="shadow-md font-ubuntu border-r border-slate-300 px-4 lg:px-10 text-lg">
      <div className="font-medium text-yin mt-8 mb-4 whitespace-nowrap">Data Viz Samples</div>
      <SideNavLink to="/samples/leaflet" displayText="Leaflet Map"/>
      <SideNavLink to="/samples/d3-pie" displayText="D3 Pies"/>
      <SideNavLink to="/samples/d3-map" displayText="D3 Map"/>
      <SideNavLink to="/samples/d3-scatterplot" displayText="D3 Scatterplot"/>
      <SideNavLink to="/samples/d3-bar" displayText="D3 Bar"/>
      <SideNavLink to="/samples/d3-line" displayText="D3 Line"/>
      <Divider/>
      <div className="font-medium text-yin my-4">Components</div>
      <SideNavLink to="/" displayText="Demo of all"/>
    </nav>
  );
}