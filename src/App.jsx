import DesktopView from "./DesktopView"
import MobileView from "./MobileView"

function App({ projects }) {

  return (
    <>
      <div className="hidden md:block h-screen">
        <DesktopView projects={projects} />
      </div>
      <div className="w-screen block md:hidden">
        <MobileView projects={projects} />
      </div>
    </>
  )
}

export default App
