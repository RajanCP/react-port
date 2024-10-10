import { motion } from "framer-motion"; 

// Define transition variants
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1, // Children animate with a 0.1s stagger
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05, // Faster stagger when closing
      staggerDirection: -1, // Animate in reverse order when closing
    },
  },
};

// Define individual item animation variants
const itemVariants = {
  open: {
    y: 0, // Item is in its final position
    opacity: 1, // Fully visible
  },
  closed: {
    y: 50, // Item moves down by 50px
    opacity: 0, // Item fades out
  },
};

const Links = () => {
  const items = ["Homepage", "About", "Portfolio", "Contact"]; // List menu links

  return (
    <motion.div className="links" variants={variants}>
      {/* Map over items and render each link */}
      {items.map((item) => (
        <motion.a
          href={`#${item}`} // Set the href to anchor to the respective section
          key={item} // Unique key for each link
          variants={itemVariants} // Apply animation variants to each link
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.95 }} // Slightly shrink on tap/click
        >
          {item} {/* Display the link text */}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links; 
