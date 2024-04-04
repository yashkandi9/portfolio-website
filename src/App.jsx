import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import UserContextProvider from "./constants/UserContextProvider";
import Customquery from "./constants/Customquery";

const App = () => {
  return (
    <UserContextProvider>
    <BrowserRouter>
      <Customquery />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
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
    </UserContextProvider>
  );
}

export default App;