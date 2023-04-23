import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { slideIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I have used</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My biggest strength is Javascript and some of its popular
        frameworks/libraries such as Reactjs and Nextjs. I'm comfortable with the MERN
        stack and can easily boostrap/collaborate on projects based off it. My
        mobile development skills with React Native(using Expo CLI) is
        intermediate as well as my Python(& Flask Framework) skills. At the
        moment, I lean more toward front-end development.
      </motion.p>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 3)}
      >
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      </motion.div>

      {/* <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(Tech, "skills");
