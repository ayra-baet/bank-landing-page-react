import { motion, useReducedMotion } from "framer-motion";

import "./Section.css";

function Section({ backgroundColor, title, description, children }) {
    const shouldReduceMotion = useReducedMotion();

    const containerVariants = {
        hidden: {},
        visible: {
            transition: shouldReduceMotion
            ? {}
            : {
                staggerChildren: 0.12
            }
        }
    };

    return(
        <section 
            className={backgroundColor}
            aria-labelledby={`${title}-heading`}
        >
            <div className="container section__container">
                <div className="section__header">
                    <h2 id={`${title}-heading`}>{title}</h2>
                    {description && <p>{description}</p>}
                </div>

                <motion.div
                    variants={containerVariants}
                    initial={shouldReduceMotion ? false : "hidden"}
                    whileInView={shouldReduceMotion ? undefined : "visible"}
                    viewport={{ once: true, amount: 0.2 }}
                    className="section__grid"
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}

export default Section;