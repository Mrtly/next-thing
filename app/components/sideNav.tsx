import Divider from "./divider";
import SideNavLink from "./sideNavLink";

export default function SideNav() {
  return (
    <nav className="border-r border-slate-300 px-4 font-ubuntu text-lg shadow-md lg:px-10">
      <div className="mb-4 mt-8 text-xl font-medium text-yin">Components</div>
      <SideNavLink to="/" displayText="Components demo" />
      <Divider />
      <div className="mb-4 mt-4 whitespace-nowrap text-xl font-medium text-yin">
        Data viz samples
      </div>
      <SideNavLink to="/samples/leaflet" displayText="Leaflet Map" />
      <SideNavLink to="/samples/d3-pie" displayText="D3 Pies" />
      <SideNavLink to="/samples/d3-map" displayText="D3 Map" />
      <SideNavLink to="/samples/d3-scatterplot" displayText="D3 Scatterplot" />
      <SideNavLink to="/samples/d3-bar" displayText="D3 Bar" />
      <SideNavLink to="/samples/d3-line" displayText="D3 Line" />
    </nav>
  );
}
