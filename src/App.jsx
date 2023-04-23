import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
  GenStarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-none">
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="relative z-0">
        <Tech />
        <StarsCanvas/>
        </div>
        <Works />
        <Experience />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
    </BrowserRouter>
  );
};

export default App;
