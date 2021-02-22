import React, {useEffect}  from 'react';

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

  useEffect(() => {
    (props.firstIn === false) && HandleHomePageIn();

  }, [])

  function HandleHomePageOut(projectId, hasAppearedID, projects){   

    props.toggleScroll(false);
    props.UpdateFirstIn()
    
    if(projects.hasAppeared[hasAppearedID])
    {   
      const timeline = new Timeline();
      timeline.to('.navigation__item', {y: '-100%', duration: .3})
      timeline.to('.primary-heading', {y: '100%'})
      timeline.to(['.line--thick', '.line--thin'], {width: 0})
     
      gsap.to('.paragraphe', {opacity: 0, delay: 1})

      gsap.to('.work-item__image-hidder', {scaleY: 1 })
      for(let i = 0; i < projects.name.length; i++){
        i <= hasAppearedID && gsap.to([projects.date[i], projects.name[i], projects.tag[i]], { y: '100%' })
      }

      timeline.to('#home-page', {opacity: 0,  onComplete: () => {
        props.SwitchProjectId(projectId)
        props.bodyScrollBar.scrollTo(0, 0, 1);
      }})
    }
  }

  function HandleHomePageIn(){
    console.log('home page in');
    props.toggleScroll(true);
    props.scrollIntoView(document.getElementById('work'))

    gsap.from('.primary-heading', {y: '100%'})

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
