import { createSignal } from "solid-js";

function App() {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div className="h-screen bg-gray-900 text-gray-200">
      <nav className="fixed bg-gray-950 p-4 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Anga's Portfolio</div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen())} className="text-gray-200 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className={`md:flex ${isOpen() ? "block" : "hidden"} space-x-4`}>
            <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md bg-gray-800">Home</a>
            <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md bg-gray-800">About</a>
            <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md bg-gray-800">Projects</a>
            <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md bg-gray-800">Contact</a>
          </div>
        </div>
      </nav>
      <main className="flex flex-col justify-center items-center h-full">
        <h1 className="text-5xl font-bold mb-4">Hello there! I'm Anga.</h1>
        <p className="text-xl text-gray-400">Welcome to my portfolio website.</p>
      </main>
    </div>
  );
}

export default App;