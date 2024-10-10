
import Sidebar from "../sidebar/Sidebar" 
import "./navbar.scss" // Importing the styles for the navbar component
import {motion} from "framer-motion" // Importing animations from Framer Motion


const Navbar = () => {
  return (
    <div className="navbar">
      {/*Sidebar*/}
      <Sidebar/>
      <div className="wrapper">
        <motion.span 
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:0.75}}
        >RajanCP
        </motion.span>
        <div className="social">
           <a href="https://www.linkedin.com/in/rajan-patel-b7727b1a4/" target="_blank" class="linkedin"><img src="/linkedin.png" alt="Linkedin"/></a>
           <a href="https://github.com/RajanCP" target="_blank" class="github"><img src="/github.png" alt="Github"/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar