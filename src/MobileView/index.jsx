import { useState, useEffect, useRef } from "react";
import "./index.css"
import Drawer from "../components/drawer";
import Tilt from "react-parallax-tilt";
import Carousel from "../components/cubeCarousel";
import GitHubButton from 'react-github-btn'
import { Contacts } from "../DesktopView";
import Marquee from "react-fast-marquee";

const ImageOfMe = ({ yapsDone, setYapsDone, index }) => {
    useEffect(() => {
        const elementsToAnimate = document.querySelectorAll('.home-image-slide-left-mobile, .home-image-slide-right-mobile');
        if (index===yapsDone){
            elementsToAnimate.forEach(element => {
                element.classList.add('animate')
            });
            setYapsDone(yapsDone + 1)
        }
    },[yapsDone])
    return (
        <div className="relative w-9/12 select-none" id="image-of-me">
            <div className='home-image-slide-left-mobile'>
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
                className="object-cover home-image-slide-right-mobile"
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
                <Tilt 
                    className="space-y-2 bg-gradient-to-tr p-2 rounded-md border-2 border-gray-600 from-blue-800 via-black to-purple-950"
                    gyroscope={true}
                >
                    <Yapping index={0} yapsDone={yapsDone} setYapsDone={setYapsDone}>I&apos;m a $age year old competitive programming enthusiast, web developer and open-source contributor. I&apos;ve done it all, from making globally scalable secure systems APIs to making the most specialized IoT prototypes.</Yapping>
                    <Yapping index={1} yapsDone={yapsDone} setYapsDone={setYapsDone}>I've given TED talks, worked with some of the most enthusiastic tech startups, headed some of the biggest clubs in University, and competed in 40+ hackathons and coding contests.</Yapping>
                    <Yapping index={2} yapsDone={yapsDone} setYapsDone={setYapsDone}>I am also lactose intolerant.</Yapping>
                </Tilt>
            </div>
            <ImageOfMe index={3} yapsDone={yapsDone} setYapsDone={setYapsDone}/>
        </div>
    )
}

const Projects = ({ projects }) => {

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <h1 className="text-[3vh] font-black">&lt;MyProjects/&gt;</h1>
            <Carousel projects={projects} />
            <span>&lt;&lt;&lt; Swipe &gt;&gt;&gt;</span>
        </div>
    )
}

const Skills = () => {
    const skillSections = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in-skills');
                } else {
                    entry.target.classList.remove('slide-in-skills');
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
        <div className="flex flex-col justify-center items-center px-8 space-y-4 w-full h-[92vh]">
            <h1 ref={el => skillSections.current[0] = el} className="text-xl font-black font-mono skills-slide-right-mobile">&lt;Skillset/&gt;</h1>
            <div ref={el => skillSections.current[1] = el} className="w-full bg-black rounded-md p-2 space-y-2 flex flex-col items-center justify-center skills-slide-left-mobile">
                <p>$&#123;Languages&#125;</p>
                <Marquee gradient={true} gradientColor="black" gradientWidth={25} className="opacity-60" speed={50} direction="right">
                    <div className="flex">
                        <img className="mr-3" src="https://skillicons.dev/icons?i=go"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=python"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=java"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=bash"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=c"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=javascript"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=matlab"/>
                    </div>
                </Marquee>
            </div>
            <div ref={el => skillSections.current[2] = el} className="w-full bg-black rounded-md p-2 space-y-2 flex flex-col items-center justify-center skills-slide-right-mobile">
                <p>$&#123;WebDevelopment&#125;</p>
                <Marquee gradient={true} gradientColor="black" gradientWidth={25} className="opacity-60" speed={50} direction="left">
                    <div className="flex">
                        <img className="mr-3" src="https://skillicons.dev/icons?i=react"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=solidjs"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=tailwind"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=vite"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=nextjs"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=wasm"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=typescript"/>
                    </div>
                </Marquee>
            </div>
            <div ref={el => skillSections.current[3] = el} className="w-full bg-black rounded-md p-2 space-y-2 flex flex-col items-center justify-center skills-slide-left-mobile">
                <p>$&#123;BackendDevelopment&#125;</p>
                <Marquee gradient={true} gradientColor="black" gradientWidth={50} className="opacity-60" speed={50} direction="right">
                    <div className="flex w-full">
                        <img className="mr-3" src="https://skillicons.dev/icons?i=django"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=flask"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=fastapi"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=expressjs"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=django"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=flask"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=fastapi"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=expressjs"/>
                    </div>
                </Marquee>
            </div>
            <div ref={el => skillSections.current[4] = el} className="w-full bg-black rounded-md p-2 space-y-2 flex flex-col items-center justify-center skills-slide-right-mobile">
                <p>$&#123;Databases&#125;</p>
                <Marquee gradient={true} gradientColor="black" gradientWidth={50} className="opacity-60" speed={50} direction="left">
                    <div className="flex w-full">
                        <img className="mr-3" src="https://skillicons.dev/icons?i=mysql"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=sqlite"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=postgres"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=mongodb"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=mysql"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=sqlite"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=postgres"/>
                        <img className="mr-3" src="https://skillicons.dev/icons?i=mongodb"/>
                    </div>
                </Marquee>
            </div>
            <div ref={el => skillSections.current[5] = el} className="skills-slide-left-mobile">
                <h1 className="text-xl font-black font-mono">And a lot more...</h1>
            </div>
        </div>
    )
}

const MobileView = ({ projects }) => {
    return (
        <div className="w-full overflow-x-hidden h-screen text-gray-200 snap-y snap-mandatory scrollbar-thin scrollbar-track-black scrollbar-thumb-blue-950 overflow-y-scroll scroll-smooth">
            <div className="bg-gradient-to-b from-black via-gray-950 to-gray-900 w-screen h-screen fixed py-20 select-none z-[-1]">
                <img className="w-full opacity-15" src="/nodes.png" draggable="false"/>
            </div>
            <div className="flex items-end justify-end w-full h-full absolute pr-2 pb-1 z-10 pointer-events-none">
                <a className='pointer-events-auto'>
                    <GitHubButton href="https://github.com/Anga205/Portfolio" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" aria-label="Star Anga205/Portfolio on GitHub">Source Code</GitHubButton>
                </a>
            </div>
            <Drawer />
            <section className="flex w-full h-screen justify-start items-center snap-center" id="home">
                <Home/>
            </section>
            <section className="flex w-full h-screen snap-center" id="projects">
                <Projects projects={projects}/>
            </section>
            <section className="flex w-full h-screen snap-center" id="skills">
                <Skills/>
            </section>
            <section className="flex w-full h-screen snap-center" id="contacts">
                <Contacts/>
            </section>
        </div>
    )
}

export default MobileView;