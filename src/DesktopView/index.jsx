import React, { useState, useEffect } from 'react'
import "./index.css"
import Slider from '../components/slideCarousel'
import Tilt from 'react-parallax-tilt'
import GitHubButton from 'react-github-btn'

const NavbarButton = ({ text, redirect = "#" }) => {
    const handleClick = () => {
        if (redirect.includes(".")) {
            window.open(redirect, "_blank")
        } else {
            window.location.href = redirect
        }
    }

    return (
        <button onClick={handleClick} className="hover:bg-gray-800 rounded-[0.7vh] border text-[1.7vh] border-gray-400 bg-gray-950 w-[10vh] h-[4.5vh] items-center justify-center flex">
            {text}
        </button>
    )
}

const DesktopNavbar = () => {
    return (
        <>
            <nav className="fixed bg-transparent pt-[1vh] w-full slide-down bg-black bg-opacity-25 select-none animate z-10">
                <div className="px-[20vh] mx-auto flex justify-between items-center">
                    <div className="flex w-full justify-between items-center h-[7vh]">
                        <img
                            src="/anga.svg"
                            className="h-full"
                        />
                        <div className="flex space-x-[4.5vh] text-gray-200" >
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
            <div className="absolute top-1/2 left-1/2 w-10/12 p-[6vh] transform -translate-x-1/2 -translate-y-1/2">
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
            <div className="px-[6vh] w-[80%] flex justify-center items-center space-x-20">
                <Tilt className="text-start translate-x-0 space-y-4 w-[55%] bg-gradient-to-tr from-blue-900 via-black to-purple-950 p-[2.5vh] border-[0.3vh] rounded-[1vh] border-gray-500">
                    <Header index={4} yapsDone={yapsDone} setYapsDone={setYapsDone}/>
                    <Yapping index={0} yapsDone={yapsDone} setYapsDone={setYapsDone}>I&apos;m a $age year old competitive programming enthusiast, web developer and open-source contributer. I&apos;ve done it all, from making globally scalable secure systems APIs to making the most specialized IoT prototypes.</Yapping>
                    <Yapping index={1} yapsDone={yapsDone} setYapsDone={setYapsDone}>I&apos;ve given TED talks, worked with some of the most enthusiastic tech startups, headed some of the biggest clubs in University, and competed in 40+ hackathons and coding contests.</Yapping>
                    <Yapping index={2} yapsDone={yapsDone} setYapsDone={setYapsDone}>I am also lactose intolerant.</Yapping>
                </Tilt>
                <ImageOfMe index={3} yapsDone={yapsDone} setYapsDone={setYapsDone}/>
            </div>
        </div>
    )
}

const Projects = ({ projects }) => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen translate-x-0 snap-center p-[10vh]" id="projects">
            <h1 className="text-[5vh] font-black pb-[1vh]">&lt;MyProjects/&gt;</h1>
            <Slider projects={ projects }/>
        </div>
    )
}

const Contacts = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen translate-x-0 snap-center p-[10vh]" id="contacts">
            <h1 className="text-[5vh] font-black pb-[2vh] text-gray-200">&lt;ContactMe/&gt;</h1>
            <div className="flex flex-col space-y-4 text-gray-200">
                <div className="flex items-center space-x-4">
                    <img src="/email.svg" alt="Email" className="w-[4vh] h-[4vh]" />
                    <a href="mailto:sayhi@angadbhalla.com" className="text-[2.5vh] hover:underline">sayhi@angadbhalla.com</a>
                </div>
                <div className="flex items-center space-x-4">
                    <img src="/linkedin.svg" alt="LinkedIn" className="w-[4vh] h-[4vh]" />
                    <a href="https://www.linkedin.com/in/anga" target="_blank" rel="noopener noreferrer" className="text-[2.5vh] hover:underline">linkedin.com/in/anga</a>
                </div>
                <div className="flex items-center space-x-4">
                    <img src="/github.png" alt="GitHub" className="w-[4vh] h-[4vh] bg-white rounded-full" />
                    <a href="https://github.com/Anga205" target="_blank" rel="noopener noreferrer" className="text-[2.5vh] hover:underline">github.com/Anga205</a>
                </div>
                <div className="flex items-center space-x-4">
                    <img src="/instagram.svg" alt="Instagram" className="w-[4vh] h-[4vh]" />
                    <a href="https://instagram.com/_anga205" target="_blank" rel="noopener noreferrer" className="text-[2.5vh] hover:underline">instagram.com/_anga205</a>
                </div>
                <div className="flex items-center space-x-4">
                    <img src="/discord.svg" alt="Discord" className="w-[4vh] h-[4vh]" />
                    <a href="https://discord.com/users/anga205" target="_blank" rel="noopener noreferrer" className="text-[2.5vh] hover:underline">discord.com/users/anga205</a>
                </div>
                <div className="flex items-center space-x-4">
                    <img src="/reddit.svg" alt="Reddit" className="w-[4vh] h-[4vh]" />
                    <a href="https://www.reddit.com/u/anga205" target="_blank" rel="noopener noreferrer" className="text-[2.5vh] hover:underline">reddit.com/user/anga205</a>
                </div>
                <div className="flex items-center space-x-4">
                    <img src="/leetcode.svg" alt="LeetCode" className="w-[4vh] h-[4vh]" />
                    <a href="https://leetcode.com/u/anga205" target="_blank" rel="noopener noreferrer" className="text-[2.5vh] hover:underline">leetcode.com/anga205</a>
                </div>
            </div>
        </div>
    )
}

const DesktopView = ({ projects }) => {
    
    return (
        <div className="w-screen h-screen text-gray-200 snap-y snap-mandatory scroll-smooth scrollbar-thin scrollbar-track-black scrollbar-thumb-slate-800 overflow-y-scroll">
            <div className="bg-gradient-to-b from-black via-gray-950 to-gray-900 w-full h-full absolute p-10 select-none z-[-1]">
                <img className="h-full opacity-10" src="/nodes.png" draggable="false" />
            </div>
            <div className="flex items-end justify-end w-full h-full absolute pb-1 pr-3 z-10 pointer-events-none">
                <a className='pointer-events-auto'>
                    <GitHubButton href="https://github.com/Anga205/Portfolio" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Star Anga205/Portfolio on GitHub">Source Code</GitHubButton>
                </a>
            </div>
            <DesktopNavbar />
            <Home />
            <Projects projects={projects}/>
            <Contacts />
        </div>
    )
}

export {DesktopView, Contacts}