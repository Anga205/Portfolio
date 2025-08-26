import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const projects = [
  {
      name: "AngaDrive",
      image: "/angadrive.png",
      description: "AngaDrive is a free and open source file hosting service made using Golang. It allows users to and quickly upload, store, and share files with ease. The platform is designed to be highly fast and efficient, ensuring that users can access their files from anywhere at any time.",
      gradient: "linear-gradient(135deg, #00002a, black, #00002a)",
      github: "https://github.com/Anga205/AngaDriveV3",
      link: "https://drive.anga.codes",
      tags: ["Solid" ,"Go", "SQLite"]
  },
  {
    name: "Code Execution API",
    image: "/codeapi.png",
    description: "Code Execution API is an HTTP API that allows users to execute code snippets in various programming languages. The API supports multiple languages, including Python, C++, Rust and more! and provides a secure and efficient environment for running code.",
    gradient: "linear-gradient(135deg, #15152a, black, #15152a)",
    github: "https://github.com/TheAlcodingClub/CodeExecutionAPI",
    tags: ["Go"]
  },
  {
      name: "QuickChat",
      image: "/quickchat.png",
      description: "QuickChat is a Social Media application made using the MERN stack. The application features real-time messaging, notifications, and a user-friendly interface.",
      gradient: "linear-gradient(135deg, #002a00, black, #002a00)",
      github: "https://github.com/Anga205/QuickChat",
      tags: ["MongoDB", "Express", "React", "NodeJS"]
  },
  {
      name: "Pycord",
      image: "/pycord.png",
      description: "Pycord is a discord-like graphical user interface made using tkinter. It replicates the core functionalities of Discord, allowing users to create chat rooms, join rooms, and communicate with others in real-time",
      gradient: "linear-gradient(135deg, #250025, black, #250025)",
      github: "https://github.com/Anga205/discord-in-python",
      tags: ["Python", "MySQL"]
  },
  {
      name: "Go Parser",
      image: "/goparser.png",
      description: "Go Parser is a performant command line application used to parse and verify a string to the Go programming language. It ensures that the given string adheres to the syntax and semantics of Go, providing detailed error messages and suggestions for corrections.",
      gradient: "linear-gradient(135deg, #15152a, black, #15152a)",
      github: "https://github.com/Anga205/go-parser",
      tags: ["Go"]
  },
  {
      name: "AngaOS",
      image: "/angaos.png",
      description: "AngaOS is a lightweight basic implementation of a bootloader, kernal and shell, written in C and Assembly. It is designed to be simple and easy to understand, making it a great starting point for anyone interested in operating system development.",
      gradient: "linear-gradient(135deg, #2a0000, black, #2a0000)",
      github: "https://github.com/Anga205/AngaOS",
      tags: ["C", "Assembly"]
  }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App projects={projects} />
  </StrictMode>,
)
