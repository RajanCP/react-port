import { useRef } from "react"; // Import useRef to track reference to DOM elements
import "./parallax.scss"; 
import { motion, useScroll, useTransform } from "framer-motion"; 

const Parallax = ({ type }) => {
  const ref = useRef(); // Create reference to the parallax element

  // Destructure scrollYProgress from useScroll to track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref, // Attach scroll tracking to the referenced element
    offset: ["start start", "end start"], // Scroll trigger points
  });

  // Calculate the vertical position of the text element based on the scroll progress.
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

 // Calculate the vertical position of the background element based on the scroll progress.
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref} 
      style={{
        // Conditional background based on the `type` prop
        background:
          type === "services"
            ? "linear-gradient(180deg, white, #0c0c1d)" // Background for 'services' type
            : "linear-gradient(180deg, white, #0c0c1d)", // Bakcground for 'portfolio' type
      }}
    >
      {/* Motion component to animate the heading based on scroll */}
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "About" : "Projects?"} {/* Conditional text */}
      </motion.h1>

      <motion.div className="mountains"></motion.div>

      {/* Animated planet or sun background with vertical movement */}
      <motion.div
        className="planets"
        style={{
          y: yBg, // Apply y-axis transform based on scroll progress
          backgroundImage: `url(${
            type === "services" ? "/planetS.png" : "/sunS.png" // Conditional background image
          })`,
        }}
      ></motion.div>

      {/* Stars with x-axis transform based on scroll progress */}
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax; // Export Parallax component
