import { Route, Routes } from 'react-router-dom'

import Textinput from './components/textinput';
import Button from './components/button'
import Checkbox from './components/checkbox'
import Card from './components/card'
import Modal from './components/modal';
import Tooltip from './components/tooltip';
import AllTheThings from './pages/allTheThings';
import D3Bar from './samples/d3BarSample';
import D3Line from './samples/d3LineSample';
import D3Scatter from './samples/d3ScatterSample';
import D3Map from './samples/d3MapSample';
import D3Pie from './samples/d3PieSample';
import LeafletIss from './samples/leafletSample';

interface routerType {
  name: string;
  path: string;
  element: JSX.Element;
}

const routes: routerType[] = [
  {
    path: "",
    element: <AllTheThings />,
    name: "All The Things"
  },
  { 
    path: "components/input", 
    element: <Textinput id="input1" label="Name" />,
    name: "Text Input"
  },
  { 
    path: "components/button", 
    element:<Button color="berry"/>,
    name: "Button"
  },
  { 
    path: "/components/checkbox", 
    element: <Checkbox id="checkbox1" label="thing"/>,
    name: "Checkbox"
  },
  { 
    path: "components/card", 
    element: <Card children={<div>a card</div>} />,
    name: "Card"
  },
  { 
    path: "components/modal", 
    element: <Modal visible={true} />,
    name: "Modal"
  },
  { 
    path: "components/tooltip", 
    element: <Tooltip displayText="what is this?" tooltipText="tooltip example revealed!" />,
    name: "Tooltip"
  },
  { 
    path: "samples/d3-bar",
    element: <D3Bar />, 
    name: "D3 Bar"
  },
  { 
    path: "samples/d3-line",
    element: <D3Line />, 
    name: "D3 Line"
  },
  { 
    path: "samples/d3-scatterplot",
    element: <D3Scatter />, 
    name: "D3 Scatterplot"
  },
  { 
    path: "samples/d3-map",
    element: <D3Map />, 
    name: "D3 Map"
  },
  { 
    path: "samples/leaflet-map", 
    element: <LeafletIss />,
    name: "Leaflet Map"
  },
  { 
    path: "samples/d3-pie", 
    element: <D3Pie />,
    name: "D3 Pie"
  }
];

const Router = () => {
  const pageRoutes = routes.map(({ path, name, element }: routerType) => {
    return <Route key={name} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;