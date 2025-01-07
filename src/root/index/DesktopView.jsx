import { createEffect, createSignal } from "solid-js";
import "./index.css";

const NavbarButton = ({ text, redirect = "#" }) => {
    return (
        <a href={redirect} className="hover:bg-gray-800 px-3 py-2 rounded-md border border-gray-400 bg-gray-950 w-24 h-10 items-center justify-center flex">{text}</a>
    );
}

const Yapping = ({ yapsDone, setYapsDone, index, children }) => {
    const [displayText, setDisplayText] = createSignal("");
    const [stillTyping, setStillTyping] = createSignal(true);
    const [buffer, setBuffer] = createSignal("");
    var typingSpeed = 10;
    var textToType = children.replace("$age", Math.floor((Date.now() / 1000 - 1117704600) / (60 * 60 * 24 * 365)))
    var currentChar = 0;
    createEffect(() => {
        let typer = () => {
            let interval = setInterval(()=>{
                currentChar++
                setDisplayText(textToType.slice(0, currentChar))
                if(displayText().length === textToType.length){
                    setDisplayText(textToType)
                    setStillTyping(false)
                    clearInterval(interval)
                    setYapsDone(yapsDone() + 1)
                }
            }, typingSpeed)
        }
        let bufferModify = () => {
            const getRandomCharacter = (str) => {
                const randomIndex = Math.floor(Math.random() * str.length);
                return str[randomIndex];
            }
            let interval = setInterval(()=>{
                if(stillTyping()){
                    setBuffer(getRandomCharacter("!@#$%^&*()_+-=[]{}|;/?"))
                } else {
                    setBuffer("")
                    clearInterval(interval)
                }
            }, typingSpeed/5)
        }
        if (index===yapsDone()){
            typer();
            bufferModify();
        }
    })
    return (
        <p className="text-[2vh] text-gray-400">{displayText()}{buffer()}</p>
    );
};

const Header = ({yapsDone, setYapsDone, index}) => {
    const [typedText, setTypedText] = createSignal("Hello there! ");

    createEffect(() => {
        const phrases = ["Hello there! ", "Namaskara! ", "Welcome Back!", "Assalamualaikum! "];
        let currentPhrase = 0;
        let currentChar = 13;
        let waitTime = 50;
        let destroy = () => {
            let interval = setInterval(()=>{
                currentChar--
                setTypedText(phrases[currentPhrase].slice(0,currentChar)+"_");
                if(currentChar === 0){
                    clearInterval(interval)
                    currentPhrase = (currentPhrase + 1) % phrases.length
                    setTimeout(builder,waitTime)
                }
            },waitTime)
        };
        let builder = () => {
            let interval = setInterval(()=>{
                currentChar++
                setTypedText(phrases[currentPhrase].slice(0,currentChar)+"_");
                if(currentChar === phrases[currentPhrase].length){
                    clearInterval(interval)
                    setTimeout(destroy, 1000);
                }
            },waitTime)
        }
        if (index===yapsDone()){
            destroy()
        }
    });

    return (
        <div>
        <h1 class="text-[3vh] font-bold select-none">{typedText()}</h1>
        <h1 class="text-[7vh] font-bold select-none">I&apos;m Anga.</h1>
        </div>
    );
};

const ImageOfMe = ({ yapsDone, setYapsDone, index }) => {
    createEffect(() => {
        const elementsToAnimate = document.querySelectorAll('.slide-left-image, .slide-right-image');
        if (index===yapsDone()){
            elementsToAnimate.forEach(element => {
                element.classList.add('animate')
            });
            setYapsDone(yapsDone() + 1)
        }
    })
    return (
        <div className="relative select-none w-[45%]">
            <img
                src="/image-border.png"
                alt="Background"
                className="w-full object-cover slide-left-image"
                draggable="false"
            />
            
            <div className="absolute top-1/2 left-1/2 w-full p-12 transform -translate-x-1/2 -translate-y-1/2">
                <img
                src="/me.jpg"
                alt="Foreground"
                className="object-cover slide-right-image"
                draggable="false"
                />
            </div>
        </div>
    )
}

const DesktopView = () => {
    const [yapsDone, setYapsDone] = createSignal(0);
    return (
        <div className="min-h-screen w-screen h-screen text-gray-200">
            <div className="bg-gradient-to-b from-black via-gray-950 to-gray-900 w-screen h-screen fixed p-10 select-none">
                <img className="h-full opacity-10" src="/nodes.png" draggable="false"/>
            </div>
            <nav className="fixed bg-transparent p-3 w-full slide-down bg-black bg-opacity-25 select-none animate">
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
            <div className="flex justify-center items-center h-[100%]">
                <div className="px-16 w-[80%] flex justify-center items-center space-x-20">
                    <div className="text-start translate-x-0 space-y-4 w-[55%]">
                        <Header index={4} yapsDone={yapsDone} setYapsDone={setYapsDone}/>
                        <Yapping index={0} yapsDone={yapsDone} setYapsDone={setYapsDone}>I&apos;m a $age year old competitive programming enthusiast, web developer and open-source contributer. I&apos;ve done it all, from making globally scalable secure systems APIs to making the most specialized IoT prototypes.</Yapping>
                        <Yapping index={1} yapsDone={yapsDone} setYapsDone={setYapsDone}>I&apos;ve given TED talks, worked with some of the most enthusiastic tech startups, headed some of the biggest clubs in University, and competed in 40+ hackathons and coding contests.</Yapping>
                        <Yapping index={2} yapsDone={yapsDone} setYapsDone={setYapsDone}>I am also lactose intolerant.</Yapping>
                    </div>
                    <ImageOfMe index={3} yapsDone={yapsDone} setYapsDone={setYapsDone}/>
                </div>
            </div>
        </div>
    );
}

export default DesktopView;