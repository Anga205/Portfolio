import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const projects = [
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App projects={projects} />
  </StrictMode>,
)
