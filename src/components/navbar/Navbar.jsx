import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const socialVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
    },
  },
};

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          KODA
        </motion.span>
        <div className="social">
          <motion.a
            href="#"
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={socialVariants}
          >
            <img src="/facebook.png" alt="Facebook" />
          </motion.a>
          <motion.a
            href="#"
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={socialVariants}
          >
            <img src="/instagram.png" alt="Instagram" />
          </motion.a>
          <motion.a
            href="#"
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={socialVariants}
          >
            <img src="/youtube.png" alt="YouTube" />
          </motion.a>
          <motion.a
            href="#"
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={socialVariants}
          >
            <img src="/dribbble.png" alt="Dribbble" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
