function MobileView() {
    return (
        <div className="min-h-screen w-screen bg-gradient-to-b from-black via-gray-950 to-gray-900 text-gray-200">
            <nav className="fixed bg-transparent p-4 w-full">
                <div className="container mx-auto flex justify-between items-center">
                    {/* For mobile, the menu will be shown as a hamburger menu or stacked vertically */}
                    <div className="flex w-full justify-between items-center">
                        <div className="md:hidden">
                            {/* Hamburger Icon for Mobile */}
                            <button className="text-gray-200 hover:text-gray-400">
                                {/* You can replace this with a hamburger icon component */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu" viewBox="0 0 24 24">
                                    <path d="M3 12h12M3 6h18M3 18h6"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="hidden md:flex space-x-4 w-full justify-center">
                            <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md border border-gray-400 bg-gray-950">Home</a>
                            <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md border border-gray-400 bg-gray-950">About</a>
                            <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md border border-gray-400 bg-gray-950">Projects</a>
                            <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md border border-gray-400 bg-gray-950">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex flex-col md:flex-row justify-center items-center min-h-screen p-4 space-y-10 md:space-x-10 md:space-y-0">
            <div className="max-w-4xl text-start space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">Hello there! I'm Anga.</h1>
            <p className="text-base md:text-xl text-gray-400">I&apos;m a {Math.floor((Date.now() / 1000 - 1117704600) / (60 * 60 * 24 * 365))} year old competitive programming enthusiast, web developer and open-source contributor. I&apos;ve done it all, from making globally scalable secure systems APIs to making the most specialized IoT prototypes.</p>

            <p className="text-base md:text-xl text-gray-400">I've given TED talks, worked with some of the most enthusiastic tech startups, headed some of the biggest clubs in University, and competed in 40+ hackathons and coding contests.</p>
            <p className="text-base md:text-xl text-gray-400">I am also lactose intolerant.</p>
            </div>
            <img
            src="/me.jpg"
            className="w-80 md:w-96 aspect-1 rounded-md object-cover"
            />
            </main>
        </div>
    )
}

export default MobileView;