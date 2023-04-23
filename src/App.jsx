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
      <div className="relative z-0 h-auto bg-primary overflow-x-hidden " class="scrollbar scrollbar-thumb-rose-500 scrollbar-track-slate-700">
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
