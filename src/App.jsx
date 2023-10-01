import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { About, Contact, Experience, Feedbacks, Hero, Navbar,Sponsors,  Works, StarsCanvas } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Sponsors/>
        <Experience />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      <ScrollToTop className="rounded-3xl bg-[#915EFF]" smooth  width="39"  />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
