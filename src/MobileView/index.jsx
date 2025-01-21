import { useState, useEffect } from "react";
import "./index.css"
import Drawer from "../components/drawer";
import Carousel from "../components/cubeCarousel";

const ImageOfMe = ({ yapsDone, setYapsDone, index }) => {
    useEffect(() => {
        const elementsToAnimate = document.querySelectorAll('.slide-left-mobile, .slide-right-mobile');
        if (index===yapsDone){
            elementsToAnimate.forEach(element => {
                element.classList.add('animate')
            });
            setYapsDone(yapsDone + 1)
        }
    },[yapsDone])
    return (
        <div className="relative w-9/12 select-none" id="image-of-me">
            <div className='slide-left-mobile'>
                <img
                    src="/border.png"
                    alt="Background"
                    className="w-full object-cover border-spin"
                    draggable="false"
                />
            </div>
            <div className="absolute top-1/2 left-1/2 w-10/12 p-12 transform -translate-x-1/2 -translate-y-1/2">
                <img
                src="/me.png"
                alt="Foreground"
                className="object-cover slide-right-mobile"
                draggable="false"
                />
            </div>
        </div>
    )
}

const Yapping = ({ yapsDone, setYapsDone, index, children }) => {

    const textToType = children.replace("$age", Math.floor((Date.now() / 1000 - 1117704600) / (60 * 60 * 24 * 365)))
    let [displayText, setDisplayText] = useState("")
    let [buffer, setBuffer] = useState("")
    let currentChar = 0
    const typingSpeed = 13

    const updateBuffer = () => {
        if(currentChar === textToType.length){
            setBuffer("")
        } else {
            const str = "!@#$%^&*()_+-=[]{}|;/?"
            setBuffer(str[Math.floor(Math.random() * str.length)])
            setTimeout(updateBuffer, typingSpeed/5)            
        }
    }

    const appendToText = () => {
        if (currentChar === textToType.length) {
            setDisplayText(textToType)
            setYapsDone(yapsDone + 1)
        } else {
            currentChar++
            setDisplayText(textToType.slice(0, currentChar))
            setTimeout(appendToText, typingSpeed)
        }
    }

    useEffect(() => {
        if(yapsDone===index){
            appendToText()
            updateBuffer()
        }
    },[yapsDone])

    return (
        <p className="text-gray-400" style={{ fontSize: "1.65vh" }}>{displayText}{buffer}</p>
    )
}

const Header = ({ yapsDone, setYapsDone, index }) => {
    const [typedText, setTypedText] = useState("Hello there!")
    const phrases = ["Hello there! ", "Namaskara! ", "Welcome Back!", "Assalamualaikum! "]
    let currentPhrase = 0
    let currentChar = 13
    const waitTime = 50

    const destroy = () => {
        const interval = setInterval(() => {
            currentChar--
            setTypedText(phrases[currentPhrase].slice(0, currentChar) + "_")
            if (currentChar === 0) {
                clearInterval(interval)
                currentPhrase = (currentPhrase + 1) % phrases.length
                setTimeout(builder, waitTime)
            }
        }, waitTime)
    }

    const builder = () => {
        const interval = setInterval(() => {
            currentChar++
            setTypedText(phrases[currentPhrase].slice(0, currentChar) + "_")
            if (currentChar === phrases[currentPhrase].length) {
                clearInterval(interval)
                setTimeout(destroy, 1000)
            }
        }, waitTime)
    }

    useEffect(() => {
        if (index === yapsDone) {
            destroy()
            setYapsDone(yapsDone + 1)
        }
    }, [yapsDone])

    return (
        <div>
            <h1 className="text-3xl font-bold w-full text-start" style={{ fontSize: "2vh" }}>{typedText}</h1>
            <h1 className="text-3xl font-bold w-full text-start" style={{ fontSize: "4vh" }}>I&apos;m Anga.</h1>
        </div>
    )
}

const Home = () => {
    const [yapsDone, setYapsDone] = useState(0);
    return (
        <div className="flex flex-col md:flex-row justify-center items-center p-4 space-y-10 h-fit">
            <div className="text-start space-y-4 px-5 w-full">
                <Header index={4} yapsDone={yapsDone} setYapsDone={setYapsDone}/>
                <Yapping index={0} yapsDone={yapsDone} setYapsDone={setYapsDone}>I&apos;m a $age year old competitive programming enthusiast, web developer and open-source contributor. I&apos;ve done it all, from making globally scalable secure systems APIs to making the most specialized IoT prototypes.</Yapping>
                <Yapping index={1} yapsDone={yapsDone} setYapsDone={setYapsDone}>I've given TED talks, worked with some of the most enthusiastic tech startups, headed some of the biggest clubs in University, and competed in 40+ hackathons and coding contests.</Yapping>
                <Yapping index={2} yapsDone={yapsDone} setYapsDone={setYapsDone}>I am also lactose intolerant.</Yapping>
            </div>
            <ImageOfMe index={3} yapsDone={yapsDone} setYapsDone={setYapsDone}/>
        </div>
    )
}

const Projects = ({ projects }) => {

    const projects1 = [
        {
            name: "AngaDrive",
            image: "https://i.anga.pro/i/bnejfwcjkcaj.png",
            description: "AngaDrive is a free and open source file hosting service made using Python. It allows users to securely upload, store, and share files with ease. The platform is designed to be highly scalable and efficient, ensuring that users can access their files from anywhere at any time.",
            gradient: "linear-gradient(135deg, #00002a, black, #00002a)",
            github: "https://github.com/Anga205/AngaDriveV2",
            link: "https://drive.anga.pro"
        },
        {
            name: "QuickChat",
            image: "https://i.anga.pro/i/pcddh52z4ian.png",
            description: "QuickChat is a Social Media application made using the MERN stack. The application features real-time messaging, notifications, and a user-friendly interface.",
            gradient: "linear-gradient(135deg, #002a00, black, #002a00)",
            github: "https://github.com/Anga205/QuickChat",
        },
        {
            name: "Pycord",
            image: "https://i.anga.pro/i/zayvhl0iqtl3.png",
            description: "Pycord is a discord-like graphical user interface made using tkinter. It replicates the core functionalities of Discord, allowing users to create chat rooms, join rooms, and communicate with others in real-time",
            gradient: "linear-gradient(135deg, #250025, black, #250025)",
            github: "https://github.com/Anga205/discord-in-python"
        },
        {
            name: "Go Parser",
            image: "https://i.anga.pro/i/9ny2s0rwskvo.png",
            description: "Go Parser is a performant command line application used to parse and verify a string to the Go programming language. It ensures that the given string adheres to the syntax and semantics of Go, providing detailed error messages and suggestions for corrections.",
            gradient: "linear-gradient(135deg, #15152a, black, #15152a)",
            github: "https://github.com/Anga205/go-parser"
        },
    ]

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <h1 className="text-4xl font-black pb-4">&lt;MyProjects/&gt;</h1>
            <Carousel projects={projects} />
            <span>&lt;&lt;&lt; Swipe &gt;&gt;&gt;</span>
        </div>
    )
}

const MobileView = ({ projects }) => {
    return (
        <div className="w-full h-screen text-gray-200 snap-y snap-mandatory scrollbar-thin scrollbar-track-black scrollbar-thumb-blue-950 overflow-y-scroll scroll-smooth">
            <div className="bg-gradient-to-b from-black via-gray-950 to-gray-900 w-screen h-screen fixed py-20 select-none z-[-1]">
                <img className="w-full opacity-15" src="/nodes.png" draggable="false"/>
            </div>
            <Drawer />
            <div className="flex w-full h-screen justify-start items-center snap-center" id="home">
                <Home/>
            </div>
            <div className="flex w-full h-screen snap-center" id="projects">
                <Projects projects={projects}/>
            </div>
        </div>
    )
}

export default MobileView;