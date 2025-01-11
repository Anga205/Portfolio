import React, { useState, useEffect } from 'react'
import "./index.css"

const NavbarButton = ({ text, redirect = "#" }) => {
    const handleClick = () => {
        if (redirect.includes(".")) {
            window.open(redirect, "_blank")
        } else {
            window.location.href = redirect
        }
    }

    return (
        <button onClick={handleClick} className="hover:bg-gray-800 px-3 py-2 rounded-md border border-gray-400 bg-gray-950 w-24 h-10 items-center justify-center flex">
            {text}
        </button>
    )
}

const DesktopNavbar = () => {
    return (
        <>
            <nav className="fixed bg-transparent p-3 w-full slide-down bg-black bg-opacity-25 select-none animate z-10">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex w-full justify-between items-center h-16">
                        <img
                            src="/anga.svg"
                            className="h-full"
                        />
                        <div className="flex space-x-10 text-gray-200" >
                            <NavbarButton text="Home" redirect="/#home" />
                            <NavbarButton text="Projects" redirect="/#projects" />
                            <NavbarButton text="Resume" redirect="resume.pdf"/>
                            <NavbarButton text="Contact" redirect="/#contacts"/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
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
        <p className="text-[2vh] text-gray-400">{displayText}{buffer}</p>
    )
}

const Header = ({ yapsDone, setYapsDone, index }) => {
    const [typedText, setTypedText] = useState("Hello there! ")
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
            <h1 className="text-[3vh] font-bold select-none">{typedText}</h1>
            <h1 className="text-[7vh] font-bold select-none">I&apos;m Anga.</h1>
        </div>
    )
}

const ImageOfMe = ({ yapsDone, setYapsDone, index }) => {
    useEffect(() => {
        if (index === yapsDone) {
            const elementsToAnimate = document.querySelectorAll('.slide-left-image, .slide-right-image')
            elementsToAnimate.forEach(element => {
                element.classList.add('animate-me')
            })
            setYapsDone(yapsDone + 1)
        }
    }, [yapsDone])

    return (
        <div className="relative select-none w-[45%]">
            <div className='slide-left-image'>
                <img
                    src="/border.png"
                    alt="Background"
                    className="w-full object-cover border-spin"
                    draggable="false"
                />
            </div>
            <div className="absolute top-1/2 left-1/2 w-10/12 p-14 transform -translate-x-1/2 -translate-y-1/2">
                <img
                    src="/me.png"
                    alt="Foreground"
                    className="object-cover slide-right-image"
                    draggable="false"
                />
            </div>
        </div>
    )
}

const Home = () => {
    const [yapsDone, setYapsDone] = useState(0)
    return (
        <div className="flex justify-center items-center h-screen snap-start" id="home">
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
    )
}

const Projects = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen translate-x-0 snap-center" id="projects">
            <h1>My Projects</h1>
        </div>
    )
}

const Contacts = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen translate-x-0 snap-center" id="contacts">
            <h1>My Contacts</h1>
        </div>
    )
}

const DesktopView = () => {
    
    return (
        <div className="w-screen h-screen text-gray-200 snap-y snap-mandatory overflow-y-scroll scroll-smooth">
            <div className="bg-gradient-to-b from-black via-gray-950 to-gray-900 w-full h-full absolute p-10 select-none z-[-1]">
                <img className="h-full opacity-10" src="/nodes.png" draggable="false" />
            </div>
            <DesktopNavbar />
            <Home />
            <Projects />
            <Contacts/>
        </div>
    )
}

export default DesktopView