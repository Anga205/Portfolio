import { createEffect, createSignal } from "solid-js";

const NavbarButton = ({ text, redirect = "#" }) => {
    return (
        <a href={redirect} className="hover:bg-gray-800 px-3 py-2 rounded-md border border-gray-400 bg-gray-950 w-24 h-10 items-center justify-center flex">{text}</a>
    );
}

const Yapping = (props) => {
    return (
        <p className="text-xl text-gray-400">{props.children}</p>
    );
};

const Header = () => {
    const [typedText, setTypedText] = createSignal(""); // Tracks the text being typed

    createEffect(() => {
        const text = "Hello there!";
        let i = 0;
        const interval = setInterval(() => {
        if (i === text.length) {
            clearInterval(interval); // Stop the interval when the text is fully typed
        } else {
            setTypedText((prev) => prev + text[i]); // Add one character at a time
            i++;
        }
        }, 100);
    });

    return (
        <div>
        <h1 class="text-3xl font-bold">{typedText()}_</h1>
        <h1 class="text-7xl font-bold">I&apos;m Anga.</h1>
        </div>
    );
};

const DesktopView = () => {
    createEffect(() => {
        const onLoad = () => {
            const elementsToAnimate = document.querySelectorAll('.slide-left, .slide-right, .slide-up, .slide-down');
            elementsToAnimate.forEach(element => {
                element.classList.add('animate');
            });
        };

        window.addEventListener('load', onLoad);

        return () => window.removeEventListener('load', onLoad);
    });
    return (
        <div className="min-h-screen w-screen md:h-screen bg-gradient-to-b from-black via-gray-950 to-gray-900 text-gray-200 bg-fixed">
            <nav className="fixed bg-transparent p-3 w-full slide-down bg-black bg-opacity-25">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex w-full justify-between items-center h-16">
                        <img
                            src="/anga.svg"
                            className="h-full"
                        />
                        <div className="flex space-x-10">
                            <NavbarButton text="Home" />
                            <NavbarButton text="Projects" />
                            <NavbarButton text="Resume" />
                            <NavbarButton text="Contact" />
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex justify-center items-end h-[70%]">
                <div className="flex justify-center items-center space-x-20">
                <div className="max-w-4xl text-start space-y-4 slide-left">
                    <Header />
                    <Yapping>I&apos;m a {Math.floor((Date.now() / 1000 - 1117704600) / (60 * 60 * 24 * 365))} year old competitive programming enthusiast, web developer and open-source contributer. I&apos;ve done it all, from making globally scalable secure systems APIs to making the most specialized IoT prototypes.</Yapping>
                    <Yapping>I&apos;ve given TED talks, worked with some of the most enthusiastic tech startups, headed some of the biggest clubs in University, and competed in 40+ hackathons and coding contests.</Yapping>
                    <Yapping>I am also lactose intolerant.</Yapping>
                </div>
                <img
                    src="/me.jpg"
                    className="w-96 aspect-1 slide-right rounded-lg"    
                />
                </div>
            </div>
        </div>
    );
}

export default DesktopView;