// import logo from './logo.svg';
import React, { useRef, useState } from 'react';
import './App.css';
import FloatingToolbar from './FloatingToolbar';
import Briefcase from './assets/briefcase-icon.svg';
import GradCap from './assets/graduation-cap-icon.svg';
import GitHub from './assets/github-icon.svg';
import LinkedIn from './assets/linkedin-icon.svg';
import Camera from './assets/camera-icon.svg';
import TokyoTower from './assets/tokyo-tower.jpg'
import EiffelTower from './assets/eiffel-tower.jpg'
import SophieLightMode from './assets/sophie-light-mode.jpg'
import SophieDarkMode from './assets/sophie-dark-mode.png';
import ArcadisLight from './assets/arcadis-logo-black.svg';
import ArcadisDark from './assets/arcadis-logo-white.svg';
import Vinquery from './assets/vinquery-logo.svg';
import UBCBlue from './assets/ubc-logo-blue.png';
import UBCWhite from './assets/ubc-logo-white.png';
import EndLight from './assets/end-page-light.png';
import EndDark from './assets/end-page-dark.png';


function toggleMenu() {
  const toolbar = document.querySelector('.toolbar');
  const isVisible = toolbar.style.display === 'flex';
  toolbar.style.display = isVisible ? 'none' : 'flex';
}

function App() {
  // Scrolling functionality
  const header1Ref = useRef(null);
  const header2Ref = useRef(null);
  const header3Ref = useRef(null);

  const headerRefs = {
    header1: header1Ref,
    header2: header2Ref,
    header3: header3Ref,
  };
  
  const scrollToHeader = (headerId) => {
    const targetRef = headerRefs[headerId];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start',     // Align to the top
      });
    } else {
      console.error(`No ref found for header: ${headerId}`);
    }
  };
  // Dark mode functionality 
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "container-light" : "container-dark"}>
      <FloatingToolbar onScrollToHeader={scrollToHeader} setDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
      {/* need to change dark mode */}
      <div className={isDarkMode ? "mt-fuji-background" : "eiffel-tower-background"}>
        <div class="center-container">
          <header className="Name-title">
            Sophie Song
          </header>
        </div>
      </div>
      <h1 ref={header1Ref}>Who <em>are </em> you?</h1>
        <div className="container-about-me">
          <div className="container-about-me-inner">
            <img src={Briefcase} alt="Briefcase, representing current occupation" className='icon'/>
            <p>Data Scientist @ Arcadis</p>
            <img src={GradCap} alt="Graduation cap, representing education attained" className='icon'/>
            <p>B.Sc in Computational Intelligence and Design @ UBC <br/> (Cognitive Science & Computer Science)</p>
            {/* need to change dark mode  */}
            <img className="container-about-me-pic" src={isDarkMode ? SophieLightMode : SophieDarkMode} alt="A picture of me at TeamLab Planets"/>
          </div>
          {/* <img className="container-about-me-tower" src={TokyoTower} alt="Picture of the Tokyo Tower I took"/> */}
          <div>{isDarkMode ? <img src={TokyoTower} alt="Tokyo Tower" className="container-about-me-pic"/> : <img src={EiffelTower} alt="Eiffel Tower" className="container-about-me-pic"/>}</div>
          <div className="container-about-me-inner">
            <img src={GitHub} alt="GitHub icon" className='icon'/>
            <a href="https://github.com/misophie" target="_blank" rel="noopener noreferrer">GitHub</a>
            <img src={LinkedIn} alt="LinkedIn icon" className='icon'/>
            <a href="https://www.linkedin.com/in/sophie--song/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <img src={Camera} alt="Camera icon" className='icon'/>
            <a href="../assets/photos.pdf" target="_blank">Photography</a>
          </div>
        </div>
        <h1 ref={header2Ref}>Experience & Education</h1>
        <div className="container-experience-education">
          <img src={isDarkMode ? ArcadisLight : ArcadisDark} className='svg-responsive'/>
          <div className="container-experience-right">
            <p class={isDarkMode ? "experience-title-light" : "experience-title-dark"}> Data Scientist</p>
            <p class="experience-subtitle">Nov. 2024 - Present</p>
          </div>
          <img src={Vinquery} alt="Vinquery Logo"/>
          <div className="container-experience-right">
            <p class={isDarkMode ? "experience-title-light" : "experience-title-dark"}> Software Developer Intern</p>
            <p class="experience-subtitle">May 2020 - Nov. 2024</p>
          </div>
          <img src={isDarkMode ? UBCBlue : UBCWhite} alt="University of British Columbia Logo"/>
          <div className="container-experience-right">
            <p class={isDarkMode ? "experience-title-light" : "experience-title-dark"}> Computational Intelligence and Design (B.Sc)</p>
            <p class="experience-subtitle">Sep. 2019 - May 2024</p>
          </div>
        </div>
        <h1 ref={header3Ref}>Projects</h1>
        <div className={isDarkMode ? "container-projects-light" : "container-projects-dark"}>
          <img src={isDarkMode ? UBCBlue : UBCWhite} alt="University of British Columbia Logo"/>
          <div>
            <h5 class={isDarkMode ? "experience-title-light" : "experience-title-dark"}>Counterfactual Arguments Using Bayesian Networks</h5>
            <p class="inline-block">I wrote a paper detailing an issue that was frequently overlooked when applying Judea Pearl’s theory with counterfactual arguments which is credited in David Poole and Alan Mackworth’s Artificial Intelligence textbook.</p>
            <br/>
            <p class="inline-block">You can read the paper </p> 
            <a class="inline-block" href="./assets/COGS_402_Project.pdf" target="_blank">here</a> 
            <p class="inline-block"> and see the textbook example </p>
            <a class="inline-block" href="https://artint.info/AIPython/aipython/aipython.pdf#page=274">here.</a>
          </div>
          <img src={Vinquery} alt="VINquery Logo"/>
          <div>
            <h5 class={isDarkMode ? "experience-title-light" : "experience-title-dark"}>VINfix Algorithm and RESTful API</h5>
            <p class="inline-block">I designed the algorithm behind VINfix and the REST API that users and clients interface with.</p>
            <br/>
            <a class="inline-block" href="https://vinquery.com/vinfix">Here</a>
            <p class="inline-block"> is an overview of what it does and </p>
            <a class="inline-block" href="https://vinquery.com/docs-vinfix">here</a>
            <p class="inline-block"> is the documentation with some sample return values from the API.</p>
          </div>
        </div>
        <div class="end-image-container">
          <img src={isDarkMode ? EndLight : EndDark}/>
        </div>
    </div>
  );
}

export default App;
