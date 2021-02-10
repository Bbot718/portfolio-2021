import React  from 'react';

//Components
import Header from './header';
//import Work from './work';
import Work from './work';
import About from './about';
import Exhibition from './exhibition';
import Contact from './contact';

//GSAP
import {gsap, Power2, Power4 }from 'gsap';
import { Timeline } from 'gsap/gsap-core';



const HomePage = (props) => {

  const duration = 1;

  function HandleHomePageOut(projectId, hasAppearedID, projects){   
    /*
    if(projects.hasAppeared[hasAppearedID])
    {   
      gsap.to('.navigation__item', {y: '-100%', ease: Power4.easeIn, duration: duration})
      gsap.to(['.line--thin', '.line--thick'], {width: 0, ease: Power2.easeOut, duration: duration, onComplete: () => {
        gsap.to('.work-item__image-hidder', {scaleY: 1, ease: Power4.easeIn, duration: duration})
        gsap.to('.navigation__selected', {x: '-100%', ease: Power4.easeIn, duration: duration})

        for(let i = 0; i < projects.name.length; i++){
          i <= hasAppearedID && gsap.to([projects.date[i], projects.name[i], projects.tag[i]], {
            y: '-100%', 
            ease: Power4.easeIn, 
            duration: duration, onComplete: () => {
              props.SwitchProjectId(projectId)
          }})
        }
      }})
    }
    */
   props.SwitchProjectId(projectId)
  }



  return (
    <div id="home-page">
      <div className="cube"></div>

      {/* Welcome Section */}
      <header id="header">
        <Header currentProject={props.currentProject}
        
                isFirstPassage={props.isFirstPassage} 
                UpdateFirstPassage={props.UpdateFirstPassage}

                toggleScroll={props.toggleScroll}
                />
      </header>

      {/* Work Section */}

      {<Work  setNumberOfProjects={props.setNumberOfProjects}
              isFirstPassage={props.isFirstPassage} 
              HomePageOut={HandleHomePageOut}
        />}
      

      {/* About Section */}
      <div id="about-full" className="container">
        <div className="row">
          <div className="col-3-of-4--no-margin">
            <About  isFirstPassage={props.isFirstPassage}  
                     UpdateFirstPassage={props.UpdateFirstPassage}
            />
            <div className="medium-spacing" />
            <Exhibition isFirstPassage={props.isFirstPassage}  
                        UpdateFirstPassage={props.UpdateFirstPassage}
            />
          </div>
        </div>
      </div>

      <Contact  isFirstPassage={props.isFirstPassage}  
                UpdateFirstPassage={props.UpdateFirstPassage}
      />
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
