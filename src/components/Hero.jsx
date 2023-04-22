import React, {Suspense} from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Name from "./canvas/Name";
// import { ComputersCanvas } from "./canvas";

// import { init, animate, onWindowResize, render } from "./canvas/AsciBall";
// import { slideIn } from "../utils/motion";
// import AsciRing from "./canvas/AsciRing";
// import ReactBall from "./canvas/ReactBall";

const Hero = () => {
  // Create reference to store the DOM element containing the animation
  const role = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(role.current, {
      strings: [
        "Front-end Developer",
        "Back-end Developer",
        "Wordpress Developer",
        "Mobile(RN) Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#0ef]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#0ef] to-transparent" />
        </div>

        <div>
          <h1 className="font-black text-white lg:text-[30px] sm:text-[20px] xs:text-[20px] text-[30px] lg:leading-[35px] mt-2">
            Hi, It's Me
          </h1>
          <h1 className="font-black text-[#0ef] lg:text-[60px] sm:text-[35px] xs:text-[30px] text-[40px] lg:leading-[65px] mt-2">
            Michael Odikanwa.
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 font-bold`}>
            And I'm a <span className="text-[#0ef]" ref={role}></span>
          </p>
        </div>
      </div>
      <div className="h-screen w-[100vw] z-1000 m-0 absolute justify-center text-center bg-primary">
        
        <Name/>
    {/* //  <ComputersCanvas />  */}


      </div>
      
      {/* <div className="h-screen w-[100vw] m-0 z-1000"><ReactBall/></div> */}
      

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
