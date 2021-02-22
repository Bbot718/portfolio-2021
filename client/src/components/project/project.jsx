import React, { useEffect, useState } from 'react';

import Axios from 'axios';

//Components
import Selection from './project-selection'
import Exhibition from './project-exhibition'




import gsap, { Power1 } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { Timeline } from 'gsap/gsap-core';
import { SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin);

const Project = (props) => {
  const [project, setProject] = useState([]);
  const [projectIn, setProjectIn] = useState(false);
  

  
  useEffect(() => {
    Axios
    .get('http://localhost:3006/api/project_'+ props.currentProject)
      .then(res => { setProject(res.data)
      })
      .catch(e => console.log(e));


      projectIn === false && HandleIn();
  }, [props.currentProject])


  function SwitchProject(id){
    props.bodyScrollBar.scrollTo(0,0,1000)
    props.toggleScroll(false)

    //title
  

    const timeline = new gsap.timeline(); 
    
    //Out
    timeline.to('.project__video__hidder', {height: '100%'})
    timeline.to('.project__paragraphe', {y: '10%', opacity: 0, duration: .3})
    timeline.to(['.project__title', '.project__tag', '.project__date'], {
      y: '100%',  
      duration: .3, 
      ease: Power1.easeOut, 
      onComplete: () => { 
        gsap.set(['.project__title', '.project__tag', '.project__date'], {y: '100%'})
        props.SwitchProjectId(id[0]) 
      }
    })

    //in
    timeline.to(['.project__title'], {y: 0, duration: .3 })
    timeline.to('.project__date', {y: 0, duration: .3})
    timeline.to('.project__tag', {y: 0, duration: .3, stagger: 0.1 })
    timeline.to('.project__video__hidder', {height: 0})
    timeline.to('.project__paragraphe', {y: 0, opacity: 1, duration: .3, onComplete:() => {props.toggleScroll(true)}})
  }

  function HandleIn(){
    const timeline = new Timeline({delay: 0.5});
    timeline.from('.project__paragraphe', {y: '10%', opacity: 0, duration: .3})
    timeline.to(['.project__title', '.project__tag', '.project__date'], {y: 0, duration: .3, ease: Power1.easeOut})
    timeline.to('.project__label', {y: 0, duration: .3, stagger: 0.1, ease: Power1.easeOut})
    timeline.to('.project__exhibition', {y: 0, duration: .3, stagger: 0.1, ease: Power1.easeOut})
    timeline.to('.project__title__line', {width: '100%'})
    timeline.to(['.selection__button', '.selection__label__text'], {y: 0, duration: .3, ease: Power1.easeOut})
    timeline.from('.project__video__hidder', {height: '100%'})
    timeline.to('.footer__content', {y: 0, onComplete: () => { props.toggleScroll(true)}})

    setProjectIn(true);
  }

  function HandleBackHome(){
    props.toggleScroll(false)
    const timeline = new Timeline();
    timeline.to('.project__video__hidder', {height: '100%'})
    timeline.to('.project__paragraphe', {y: '10%', opacity: 0, duration: .3})
    timeline.to(['.project__title', '.project__tag', '.project__date'], {y: '100%', duration: .3, ease: Power1.easeOut})
    timeline.to('.tertiary-heading', {y: '100%', duration: .3, stagger: 0.1, ease: Power1.easeOut})
    timeline.to(['.selection__button', '.selection__label__text'], {y: '100%', duration: .3, ease: Power1.easeOut})
    timeline.to('.project__title__line', {width: 0, onComplete: () => {props.SwitchProjectId('home')}})
 }

  return (
    <React.Fragment>
      <div className="project">
        <div className="container">

          { /* Selection */ }
          <div className="row">
            <div className="col-5-of-6 col-5-of-6--no-margin">
                <Selection  currentProject={props.currentProject} 
                            SwitchProject={SwitchProject} 
                            HandleBackHome={HandleBackHome} 
                            numberOfProjects={props.numberOfProjects}/>
            </div>
          </div>
          <div className="small-spacing" />
           
          { /* Title */ }
          <div className="row">
            <div className="col-5-of-6 col-5-of-6--no-margin">
            
              <div className="project__tag__container">
                <span className="project__tag info-heading ">Processing</span>
                <span className="project__tag info-heading ">Virtual Reality</span>
              </div>
              <div className="project__title__container info-heading__container">
                <h2 className="project__title">
                  <span className="secondary-heading info-heading--uppercase info-heading--bold">
                    {project.map(project => project.Name )}
                  </span>
                </h2>
              </div>
              <h2 className="project__date__container">
                <span className="info-heading project__date">{"/ " + project.map(project => project.Date )}</span>
              </h2>
              <hr className="project__title__line line--thin"/>
            </div>
          </div>

          { /* Media */ }
          <div className="row">
            <div className="medium-spacing" />
              <div className="col-z-of-6 col-1-of-6--no-margin">
                <div className="info-heading__container">
                  <span className="project__label tertiary-heading info-heading--uppercase">Media</span>
                </div>
              </div>
              <div className="col-4-of-6 col-4-of-6--no-margin"> 
                <div className="project__video__container">
                    <div className="project__video__container">
                      <div className="project__video__hidder"/>
                      <video className="project__video">
                        <source src={require('../../assets/videos/cap_thumbnail.mp4').default}  />
                      </video>  
                    </div>
                  </div>
                </div>
                <div className="small-spacing" />
              </div>
    
            <div className="row">
        
                <div className="small-spacing" />
                <div className="col-5-of-6 col-5-of-6--no-margin">
                  <div className="info-heading__container">
                    <span className="project__label tertiary-heading info-heading--uppercase">About</span>
                   
               
                  </div>
                  <div className="small-spacing" />
                    <div className="paragraphe project__paragraphe">{project.map(project => project.Description )}</div>
                </div>
                <div className="col-4-of-6 col-4-of-6--no-margin">
                 
                   
                  </div>
                <div className="medium-spacing" />
            </div>


            <div className="row">
                  <Exhibition currentProject={props.currentProject} />
                <div className="medium-spacing" />
            </div>            
           
        </div>
      </div>


      <footer className="footer">
       
        <div className="row">
            <div className="col-4-of-6 col-4-of-6--no-margin">
              <div className="info-heading__container">
                <div className="small-spacing" />
                <span className="footer__content info-heading">Designed with <span className="info-heading--red"> ♥ </span> | Copyright 2020</span>
              </div>
          </div>
        </div>
      </footer>

    </React.Fragment>
  )

}

export default Project;
