import "./hero.scss"; 
import { motion } from "framer-motion"; 

// Text animation variants
const textVariants = {
  initial: {
    x: -500, // Start off-screen
    opacity: 0, // Fully transparent
  },
  animate: {
    x: 0, // Move to the center
    opacity: 1, // Fully visible
    transition: {
      duration: 1, 
      staggerChildren: 0.1, // Delay between each child element
    },
  },
  scrollButton: {
    opacity: 0, // Initially hidden
    y: 10, 
    transition: {
      duration: 2, 
      repeat: Infinity, // Animation repeats infinitely
    },
  },
};

// Sliding text animation variants
const sliderVariants = {
  initial: {
    x: 0, // Start at the initial position
  },
  animate: {
    x: "-220%", // Slide text off-screen to the left
    transition: {
      duration: 20, // Slow 20-second animation
      repeat: Infinity, // Loop animation forever
      repeatType: "mirror", // Reverse direction at each cycle
    },
  },
};

const Hero = () => {
  return (
    <div className="hero"> {/* Main hero section */}
      <div className="wrapper"> {/* Wrapper for content */}
        <motion.div
          className="textContainer"
          variants={textVariants} // Apply text animations
          initial="initial"
          animate="animate"
        >
          {/* Animated headings */}
          <motion.h2 variants={textVariants}>RAJAN PATEL</motion.h2>
          <motion.h1 variants={textVariants}>Front-end Web Developer</motion.h1>
          
          {/* Buttons with animations */}
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>View my Projects</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>

          {/* Scroll icon animation */}
          <motion.img
            variants={textVariants}
            animate="scrollButton" // Scroll button animation
            src="/scroll.png"
            alt="Scroll down"
          />
        </motion.div>
      </div>

      {/* Sliding text at the bottom */}
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants} // Apply sliding animation
        initial="initial"
        animate="animate"
      >
        Aspiring Developer
      </motion.div>

      {/* Empty container for an image (can be populated later) */}
      <div className="imageContainer"></div>
    </div>
  );
};

export default Hero; 

