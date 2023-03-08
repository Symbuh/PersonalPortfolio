import { BrowserRouter } from 'react-router-dom';

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
} from './components';

function App() {
  return (
    <BrowserRouter>
      <div class='relative z-0 bg-primary'>
        <div class='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <h1 className='text-9x10 font-bold text-red-500 underline-text-center'>
            hello
          </h1>
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
  );
}

export default App;
