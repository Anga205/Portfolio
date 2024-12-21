function DesktopView() {
    return (
        <div className="min-h-screen w-screen md:h-screen bg-gradient-to-b from-black via-gray-950 to-gray-900 text-gray-200">
            <nav className="fixed bg-transparent p-4 w-full">
                <div className="container mx-auto flex justify-between items-center">
                <div className="hidden md:flex space-x-60 w-full justify-center">
                    <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md border border-gray-400 bg-gray-950">Home</a>
                    <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md border border-gray-400 bg-gray-950">About</a>
                    <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md border border-gray-400 bg-gray-950">Projects</a>
                    <a href="#" className="hover:text-gray-400 px-3 py-2 rounded-md border border-gray-400 bg-gray-950">Contact</a>
                </div>
                </div>
            </nav>
            <main className="hidden md:flex justify-center items-center min-h-screen md:p-0 px-10 pt-28 md:pt-0 md:space-x-10 space-y-10">
                <div className="max-w-4xl text-start space-y-4 slide-left">
                <h1 className="text-5xl font-bold">Hello there! I'm Anga.</h1>
                <p className="text-xl text-gray-400">I&apos;m a {Math.floor((Date.now() / 1000 - 1117704600) / (60 * 60 * 24 * 365))} year old competitive programming enthusiast, web developer and open-source contributer. I&apos;ve done it all, from making globally scalable secure systems APIs to making the most specialized IoT prototypes.</p>
                
                <p className="text-xl text-gray-400">I've given TED talks, worked with some of most enthusiastic tech startups, headed some of the biggest clubs in University and competed in 40+ hackathons and coding contests.</p>
                <p className="text-xl text-gray-400">I am also lactose intolerant.</p>
                </div>
                <img
                src="/me.jpg"
                className="w-96 aspect-1 slide-right"
                />
            </main>
        </div>
    );
}

export default DesktopView;