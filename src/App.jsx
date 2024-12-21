import { createSignal } from "solid-js";

function App() {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div className="h-screen bg-gradient-to-b from-black via-gray-950 to-gray-900 text-gray-200">
      <nav className="fixed bg-transparent p-4 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen())} className="text-gray-200 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-60 w-full justify-center">
            <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md border border-gray-400 bg-gray-950">Home</a>
            <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md border border-gray-400 bg-gray-950">About</a>
            <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md border border-gray-400 bg-gray-950">Projects</a>
            <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md border border-gray-400 bg-gray-950">Contact</a>
          </div>
        </div>
      </nav>
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transform ${isOpen() ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="p-4">
          <button onClick={() => setIsOpen(false)} className="text-gray-200 focus:outline-none mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <nav className="flex flex-col space-y-4">
            <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md border border-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md border border-gray-400">About</a>
            <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md border border-gray-400">Projects</a>
            <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md border border-gray-400">Contact</a>
          </nav>
        </div>
      </div>
      <main className="flex flex-col justify-center items-center h-full">
        <div className="max-w-3xl text-start p-4 space-y-4">
          <h1 className="text-5xl font-bold">Hello there! I'm Anga.</h1>
          <p className="text-xl text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos doloremque consequatur facilis amet quaerat in veritatis cupiditate accusantium iusto inventore, ducimus corporis itaque vitae! Obcaecati temporibus illum odio perspiciatis? Quis.</p>
        </div>
      </main>
    </div>
  );
}

export default App;