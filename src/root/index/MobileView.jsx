import Drawer from "./components/Drawer";

function MobileView() {
    return (
        <div className="min-h-screen w-screen bg-gradient-to-b from-black via-gray-950 to-gray-900 text-gray-200">
            <Drawer />
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