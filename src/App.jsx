import { BrowserRouter } from "react-router-dom";

import { Hero, About, Contact, Education, Experience, Feedbacks, Navbar, Tech, Works, StarsCanvas } from "./components";
// import UserContextProvider from "./constants/UserContextProvider";
import Customquery from "./constants/Customquery";



const App = () => {
  return (
   
    <BrowserRouter>
      <Customquery />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;