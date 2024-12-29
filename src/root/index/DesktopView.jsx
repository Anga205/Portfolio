import { createEffect, createSignal } from "solid-js";

const NavbarButton = ({ text, redirect = "#" }) => {
    return (
        <a href={redirect} className="hover:bg-gray-800 px-3 py-2 rounded-md border border-gray-400 bg-gray-950 w-24 h-10 items-center justify-center flex">{text}</a>
    );
}

const Yapping = (props) => {
    return (
        <p className="text-[2vh] text-gray-400">{props.children}</p>
    );
};

const Header = () => {
    const [typedText, setTypedText] = createSignal("");

    createEffect(() => {
        const phrases = ["Hello there! ", "Namaskara! ", "Welcome Back!", "Assalamualaikum! "];
        let currentPhrase = 0;
        let currentChar = 0;
        let waitTime = 50;
        let builder = () => {
            let interval = setInterval(()=>{
                currentChar++
                setTypedText(phrases[currentPhrase].slice(0,currentChar));
                if(currentChar === phrases[currentPhrase].length){
                    clearInterval(interval)
                    setTimeout(destroy, 1000);
                }
            },waitTime)
        }
        let destroy = () => {
            let interval = setInterval(()=>{
                currentChar--
                setTypedText(phrases[currentPhrase].slice(0,currentChar));
                if(currentChar === 0){
                    clearInterval(interval)
                    currentPhrase = (currentPhrase + 1) % phrases.length
                    setTimeout(builder,waitTime)
                }
            },waitTime)
        };
        builder();
    });

    return (
        <div>
        <h1 class="text-[3vh] font-bold">{typedText()}_</h1>
        <h1 class="text-[7vh] font-bold">I&apos;m Anga.</h1>
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
        <>
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
                    <div className="px-16 max-w-7xl flex justify-center items-center space-x-20">
                    <div className="text-start space-y-4 slide-left">
                        <Header />
                        <Yapping>I&apos;m a {Math.floor((Date.now() / 1000 - 1117704600) / (60 * 60 * 24 * 365))} year old competitive programming enthusiast, web developer and open-source contributer. I&apos;ve done it all, from making globally scalable secure systems APIs to making the most specialized IoT prototypes.</Yapping>
                        <Yapping>I&apos;ve given TED talks, worked with some of the most enthusiastic tech startups, headed some of the biggest clubs in University, and competed in 40+ hackathons and coding contests.</Yapping>
                        <Yapping>I am also lactose intolerant.</Yapping>
                    </div>
                    <img
                        src="/me.jpg"
                        className="w-[50vh] aspect-1 slide-right rounded-lg"    
                    />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DesktopView;