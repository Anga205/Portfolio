import './App.css';
import DesktopView from './index/DesktopView';
import MobileView from './index/MobileView';
import { Route, Router } from "@solidjs/router";
import animatedPage from './animation/open';


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
      <Route path="/animation" component={animatedPage} />
    </Router>
  );
}

export default App;