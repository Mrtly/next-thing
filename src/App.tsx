import TopNav from './components/topNav';
import Textinput from './components/textinput';
import Button from './components/button'
import Checkbox from './components/checkbox'
import Card from './components/card'
import SideNav from './components/sideNav';
import Modal from './components/modal';
import Tooltip from './components/tooltip';
import AllTheThings from './pages/allTheThings';
import D3Bar from './samples/d3BarSample';
import D3Line from './samples/d3LineSample';
import D3Scatter from './samples/d3ScatterSample';
import D3Map from './samples/d3MapSample';

import { Route, Routes } from 'react-router-dom'
import LeafletIss from './samples/leafletSample';

export default function App() {
  
  return (
    <>
      <TopNav/>
      <div className="flex font-ubuntu">
        <SideNav/>
        <div className="w-full min-w-screen min-h-screen p-10 bg-matcha flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<AllTheThings/>}/>
            <Route path="/components/input" element={<Textinput id="input1" label="Name" />}/>
            <Route path="/components/button" element={<Button color="moss"/>}/>
            <Route path="/components/checkbox" element={<Checkbox id="checkbox1" label="thing"/>}/>
            <Route path="/components/card" element={<Card children={<div>a card</div>} />}/>
            <Route path="/components/modal" element={<Modal visible={true} />}/>
            <Route path="/components/tooltip" element={<Tooltip displayText="what is this?" tooltipText="tooltip example revealed!" />}/>
            <Route path="/samples/d3-bar" element={<D3Bar />}/>
            <Route path="/samples/d3-line" element={<D3Line />}/>
            <Route path="/samples/d3-scatterplot" element={<D3Scatter />}/>
            <Route path="/samples/d3-map" element={<D3Map />}/>
            <Route path="/samples/leaflet-map" element={<LeafletIss />}/>
          </Routes>
        </div>
      </div>
    </>
  );
}