import DesktopView from "./DesktopView"
import MobileView from "./MobileView"

function App() {

  return (
    <>
      <div className="hidden md:block h-screen">
        <DesktopView />
      </div>
      <div className="block md:hidden">
        <MobileView />
      </div>
    </>
  )
}

export default App
