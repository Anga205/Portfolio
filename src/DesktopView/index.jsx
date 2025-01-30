import React, { useState, useEffect, useRef } from 'react'
import "./index.css"
import {Slider} from '../components/slideCarousel'
import Tilt from 'react-parallax-tilt'
import GitHubButton from 'react-github-btn'
import Marquee from "react-fast-marquee";

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
        <nav className="fixed bg-transparent py-[1vh] w-full slide-down select-none animate z-10">
            <div className="px-[20vh] flex justify-between items-center h-[7vh]">
                <img src="/anga.svg" className="h-full" />
                <div className="flex space-x-[4.5vh] text-gray-200">
                    <NavbarButton text="Home" redirect="/#home" />
                    <NavbarButton text="Projects" redirect="/#projects" />
                    <NavbarButton text="Resume" redirect="resume.pdf" />
                    <NavbarButton text="Skills" redirect="/#skills" />
                    <NavbarButton text="Contact" redirect="/#contacts" />
                </div>
            </div>
        </nav>
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
            <h1 className="text-[3vh] font-bold">{typedText}</h1>
            <h1 className="text-[7vh] font-bold">I&apos;m Anga.</h1>
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
            <div className="px-[6vh] w-[80%] flex justify-center items-center space-x-[10vh]">
                <Tilt className="text-start translate-x-0 space-y-[1.5vh] w-[55%] bg-gradient-to-tr from-blue-900 via-black to-purple-950 p-[2.5vh] border-[0.3vh] rounded-[1vh] border-gray-500">
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

const contactDetails = [
    { src: "/email.svg", alt: "Email", href: "mailto:sayhi@angadbhalla.com", text: "sayhi@angadbhalla.com" },
    { src: "/linkedin.svg", alt: "LinkedIn", href: "https://www.linkedin.com/in/anga", text: "linkedin.com/in/anga" },
    { src: "/github.svg", alt: "GitHub", href: "https://github.com/Anga205", text: "github.com/Anga205" },
    { src: "/instagram.svg", alt: "Instagram", href: "https://instagram.com/_anga205", text: "instagram.com/_anga205" },
    { src: "/discord.svg", alt: "Discord", href: "https://discord.com/users/anga205", text: "discord.com/users/anga205" },
    { src: "/reddit.svg", alt: "Reddit", href: "https://www.reddit.com/u/anga205", text: "reddit.com/u/anga205" },
    { src: "/leetcode.svg", alt: "LeetCode", href: "https://leetcode.com/u/anga205", text: "leetcode.com/u/anga205" },
]

const Contacts = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen translate-x-0 snap-center p-[10vh]" id="contacts">
            <h1 className="text-[5vh] font-black pb-[2vh] text-gray-200">&lt;ContactMe/&gt;</h1>
            <div className="flex flex-col space-y-4 text-gray-200">
                {contactDetails.map(({ src, alt, href, text }) => (
                    <div key={href} className="flex items-center space-x-4">
                        <img src={src} alt={alt} className="w-[4vh] h-[4vh]" />
                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-[2.5vh] hover:underline">{text}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

const Skills = () => {
    const skillSections = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in-skills-desktop');
                } else {
                    entry.target.classList.remove('slide-in-skills-desktop');
                }
            });
        }, { threshold: 0.1 });

        skillSections.current.forEach(section => {
            observer.observe(section);
        });

        return () => {
            skillSections.current
                .filter(section => section)
                .forEach(section => {
                    observer.unobserve(section);
                });
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen translate-x-0 snap-center p-[10vh]" id="skills">
            <h1 ref={el => skillSections.current[0] = el} className="text-[8vh] font-black font-mono opacity-0 mb-[3vh]">&lt;Skillset/&gt;</h1>
            <div className='flex w-10/12 space-x-[4vh]'>
                <div className='flex flex-col w-1/2 space-y-[4vh]'>
                    <div ref={el => skillSections.current[1] = el} className="bg-black w-full py-4 px-8 rounded-xl skills-slide-left-desktop">
                        <p className='w-full text-center text-[3.4vh] font-semibold'>Languages</p>
                        <Marquee gradient={true} gradientColor="black" gradientWidth={25} className="opacity-60" speed={50} direction="right">
                            <div className="flex">
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=go"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=python"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=java"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=bash"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=c"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=javascript"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=matlab"/>
                            </div>
                        </Marquee>
                    </div>
                    <div ref={el => skillSections.current[2] = el} className="bg-black w-full py-4 px-8 rounded-xl skills-slide-left-desktop">
                        <p className='w-full text-center text-[3.4vh] font-semibold'>Web Development</p>
                        <Marquee gradient={true} gradientColor="black" gradientWidth={25} className="opacity-60" speed={50} direction="left">
                            <div className="flex">
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=react"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=solidjs"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=tailwind"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=vite"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=nextjs"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=wasm"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=typescript"/>
                            </div>
                        </Marquee>
                    </div>
                </div>
                <div className='flex flex-col w-1/2 space-y-[4vh]'>
                    <div ref={el => skillSections.current[3] = el} className="bg-black w-full py-4 px-8 rounded-xl skills-slide-right-desktop">
                        <p className='w-full text-center text-[3.4vh] font-semibold'>Hosting & Cloud</p>
                        <Marquee gradient={true} gradientColor="black" gradientWidth={25} className="opacity-60" speed={50} direction="right">
                            <div className="flex">
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=raspberrypi"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=vercel"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=netlify"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=gcp"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=aws"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=azure"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=linux"/>
                            </div>
                        </Marquee>
                    </div>
                    <div ref={el => skillSections.current[4] = el} className="bg-black w-full py-4 px-8 rounded-xl skills-slide-right-desktop">
                        <p className='w-full text-center text-[3.4vh] font-semibold'>Backend Development</p>
                        <Marquee gradient={true} gradientColor="black" gradientWidth={25} className="opacity-60" speed={50} direction="left">
                            <div className="flex">
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=django"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=flask"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=fastapi"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=expressjs"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=django"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=flask"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=fastapi"/>
                                <img className="mr-3 w-[12vh]" src="https://skillicons.dev/icons?i=expressjs"/>
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
            <p ref={el => skillSections.current[5] = el} className="font-mono w-9/12 text-center text-[3vh] mt-[4vh] opacity-0">And more! If my skillset doesnt meet your requirements, I can learn your desired tech stack in a pinch!</p>
        </div>
    )
}

const DesktopView = ({ projects }) => {
    
    return (
        <div className="w-screen h-screen text-gray-200 snap-y snap-mandatory scroll-smooth scrollbar-thin scrollbar-track-black scrollbar-thumb-slate-800 overflow-y-scroll">
            <div className="bg-gradient-to-b from-black via-gray-950 to-gray-900 w-full h-full absolute p-[4vh] select-none z-[-1]">
                <img className="h-full opacity-10" src="/nodes.png" draggable="false" />
            </div>
            <div className="flex items-end justify-between w-full pb-[0.3vh] h-full absolute z-10 pointer-events-none">
                <div/>
                <a className='pointer-events-auto pr-[1vh]'>
                    <GitHubButton href="https://github.com/Anga205/Portfolio" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" aria-label="Star Anga205/Portfolio on GitHub">Source Code</GitHubButton>
                </a>
            </div>
            <DesktopNavbar />
            <Home />
            <Projects projects={projects}/>
            <Skills />
            <Contacts />
        </div>
    )
}

export { DesktopView, Contacts }