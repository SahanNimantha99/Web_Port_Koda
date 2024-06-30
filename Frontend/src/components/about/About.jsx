import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

const textVariants = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};

const imageVariants = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};

const About = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className="about"
            initial="initial"
            ref={ref}
            animate={isInView ? "animate" : ""}
        >
            <div className="about-images">
                <img src="/about_1.png" alt="Fixed background" className="fixed-image" />
                <motion.img
                    src="/about_2.png"
                    alt="Team working together"
                    className="animated-image"
                    variants={imageVariants}
                />
            </div>

            <div className="about-content">
                <h2>WHO WE ARE</h2>
                <h1>
                    Creators <br></br>
                    of the Digital <span className="highlight">Frontier</span>
                </h1>
                <motion.p variants={textVariants}>
                    Our spirit of exploration drives us to discover and<br></br>
                    implement the latest advancements in software<br></br>
                    development. Committed to excellence, we deliver<br></br>
                    top-tier quality in every project, while our adaptability<br></br>
                    ensures we thrive in the ever-evolving digital<br></br>
                    landscape.
                </motion.p>
                <div className="button-container">
                    <div className="background-squares">
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                    </div>
                    <motion.button
                        className="contact-button"
                        whileHover={{ scale: 1.1, borderRadius: "15px", backgroundColor: "#4A12A4" }}
                    >
                        CONTACT US
                    </motion.button>

                </div>
            </div>
        </motion.div>
    );
};

export default About;
