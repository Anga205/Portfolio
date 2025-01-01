import './App.css';
import DesktopView from './index/DesktopView';
import MobileView from './index/MobileView';
import { Route, Router } from "@solidjs/router";


function Index() {
  return (
    <>
    <div className="hidden md:block">
      <DesktopView />
    </div>
    <div className="block md:hidden">
      <MobileView />
    </div>
  </>
);
}
  

function App() {
  return (
    <Router>
      <Route path="/" component={Index} />
    </Router>
  );
}

export default App;