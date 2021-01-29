import React  from 'react';

//Components
import Header from './header';
//import Work from './work';
import Work from './work-functional';
import About from './about';
import Exhibition from './exhibition';
import Contact from './contact';

//GSAP
import gsap from 'gsap';
import { Timeline } from 'gsap/gsap-core';

function HandleHomePageOut(id, props){
  gsap.to(['.line--thin', '.line--thick'], {width: 0})
  gsap.to('.work-item__image-hidder', {scaleY: 1})
  gsap.to(['.work-item__date', '.work-item__name'], {y: '-100%'})
  gsap.to('.primary-heading', { y: '-100%', onComplete: () => {
    props.SwitchProjectId(id);
  }})
  console.log(id);
  console.log(props);
}

function HomePage(props) {



  return (
    <div id="home-page">

      {/* Welcome Section */}
      <header id="header">
        <Header currentProject={props.currentProject}/>
      </header>

      {/* Work Section */}
      <Work SwitchProjectId={props.SwitchProjectId} 
            HomePageOut={HandleHomePageOut} />
      {/*<Work switchPage={props.switchPage} />*/}
      

      {/* About Section */}
      <div id="about-full" className="container">
        <div className="row">
          <div className="col-3-of-4--no-margin">
            <About />
            <div className="medium-spacing" />
            <Exhibition />
          </div>
        </div>
      </div>

      <Contact />
      <div className="medium-spacing" />

      <footer className="footer">
        <div className="info-heading__container">
          <span className="footer__content info-heading">Designed with <span className="info-heading--red"> ♥ </span> | Copyright 2020</span>
        </div>
      </footer>
    </div>
  )

}

export default HomePage;
