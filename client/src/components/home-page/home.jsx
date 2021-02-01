import React  from 'react';

//Components
import Header from './header';
//import Work from './work';
import Work from './work';
import About from './about';
import Exhibition from './exhibition';
import Contact from './contact';

//GSAP
import gsap from 'gsap';
import { Timeline } from 'gsap/gsap-core';



function HomePage(props) {

  function HandleHomePageOut(id){
    gsap.to(['.line--thin', '.line--thick'], {width: 0})
    gsap.to('.work-item__image-hidder', {scaleY: 1})
    gsap.to('.navigation__selected', {x: '-100%'})
    gsap.to(['.work-item__date', '.work-item__name'], {y: '-100%'})
    gsap.to(['.work-item__tag', '.work-item__name'], {y: '-100%'})
    gsap.to('.primary-heading', { y: '-100%', onComplete: () => {
      props.SwitchProjectId(id)
    }})
  }



  return (
    <div id="home-page">

      {/* Welcome Section */}
      <header id="header">
        <Header currentProject={props.currentProject}/>
      </header>

      {/* Work Section */}

      {<Work switchPage={props.switchPage} HomePageOut={HandleHomePageOut}/>}
      

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
