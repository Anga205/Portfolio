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

const Projects = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <Carousel />
        </div>
    )
}

const MobileView = () => {
    return (
        <div className="w-full h-screen text-gray-200 snap-y snap-mandatory overflow-y-scroll scroll-smooth">
            <div className="bg-gradient-to-b from-black via-gray-950 to-gray-900 w-screen h-screen fixed py-20 select-none z-[-1]">
                <img className="w-full opacity-15" src="/nodes.png" draggable="false"/>
            </div>
            <Drawer />
            <div className="flex w-full h-screen justify-start items-center snap-center" id="home">
                <Home/>
            </div>
            <div className="flex w-full h-screen snap-center" id="projects">
                <Projects/>
            </div>
        </div>
    )
}

export default MobileView;