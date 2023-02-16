import TopNav from './components/topNav';
import SideNav from './components/sideNav';

import Router from "./routes";

export default function App() {
  
  return (
    <>
      <TopNav/>
      <div className="flex font-ubuntu">
        <SideNav/>
        <div className="w-full min-w-screen min-h-screen p-10 bg-matcha flex flex-col items-center justify-center">
          <Router/>
        </div>
      </div>
    </>
  );
}