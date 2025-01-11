import { useState, useEffect } from "react";
import "./index.css"
import Drawer from "./components/drawer";

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
        <div className="relative w-full select-none">
            <img
                src="/image-border.png"
                alt="Background"
                className="w-full object-cover slide-left-mobile"
                draggable="false"
            />
            
            <div className="absolute top-1/2 left-1/2 w-full p-12 transform -translate-x-1/2 -translate-y-1/2">
                <img
                src="/me.jpg"
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
        <p className="text-base md:text-xl text-gray-400">{displayText}{buffer}</p>
    )
}

const MobileView = () => {
    const [yapsDone, setYapsDone] = useState(0);
    return (
        <div className="h-screen w-screen text-gray-200">
            <div className="bg-gradient-to-b from-black via-gray-950 to-gray-900 w-screen h-screen fixed py-20 select-none z-[-1]">
                <img className="w-full opacity-15" src="/nodes.png" draggable="false"/>
            </div>
            <Drawer />
            <main className="flex flex-col md:flex-row justify-center items-center p-4 space-y-10">
                <div className="text-start space-y-4 px-5 w-full">
                    <h1 className="text-3xl font-bold w-full text-start">Hello there! I'm Anga.</h1>
                    <Yapping index={0} yapsDone={yapsDone} setYapsDone={setYapsDone}>I&apos;m a $age year old competitive programming enthusiast, web developer and open-source contributor. I&apos;ve done it all, from making globally scalable secure systems APIs to making the most specialized IoT prototypes.</Yapping>
                    <Yapping index={1} yapsDone={yapsDone} setYapsDone={setYapsDone}>I've given TED talks, worked with some of the most enthusiastic tech startups, headed some of the biggest clubs in University, and competed in 40+ hackathons and coding contests.</Yapping>
                    <Yapping index={2} yapsDone={yapsDone} setYapsDone={setYapsDone}>I am also lactose intolerant.</Yapping>
                </div>
                <ImageOfMe index={3} yapsDone={yapsDone} setYapsDone={setYapsDone}/>
            </main>
        </div>
    )
}

export default MobileView;