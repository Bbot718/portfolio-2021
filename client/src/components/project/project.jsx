import React, { useEffect, useState } from 'react';

import Axios from 'axios';

//Components
import Selection from './project-selection'
import Exhibition from './project-exhibition'




import gsap, { Power1 } from 'gsap';
import { Timeline } from 'gsap/gsap-core';
import { SplitText } from 'gsap/all';

const Project = (props) => {
  const [project, setProject] = useState([]);
  const [data, setData] = useState();

  
  useEffect(() => {
    //ProjectIn();
    
    Axios
    .get('http://localhost:3006/api/project_'+ props.currentProject)
      .then(res => { setProject(res.data)
      })
      .catch(e => console.log(e));

      console.log('setdata')
  }, [props.currentProject])


  function SwitchProject(id){
    props.scrollIntoView(0)

    //title
    const timelineTitle = new gsap.timeline(); 
    timelineTitle.to(['.project__title', '.project__tag', '.project__date'], {y: '-100%', ease: Power1.easeOut, onComplete: () => { 
      gsap.set(['.project__title', '.project__tag', '.project__date'], {y: '100%'})
      props.SwitchProjectId(id[0]) 

      //Media
      const timelineMedia = new Timeline();
    }})
    
    timelineTitle.to(['.project__title'], {y: 0,onComplete: () => { props.SwitchProjectId(id[0]) }})
    timelineTitle.to('.project__date', {y: 0})
    timelineTitle.to('.project__tag', {y: 0})
  }

  function HandleBackHome(){
    console.log('back home');
    props.SwitchProjectId(null);
    props.scrollIntoView(document.querySelector('#work'))


 }

  return (
    <React.Fragment>
      <div className="project">
        <div className="container">
        <div className="row">
              <div className="col-7-of-8 col-7-of-8--no-margin">
                <Selection currentProject={props.currentProject} SwitchProject={SwitchProject} HandleBackHome={HandleBackHome} scrollIntoView={props.scrollIntoView} numberOfProjects={props.numberOfProjects}/>
              </div>
            </div>
            <div className="medium-spacing" />
           

            <div className="row">
              <div className="col-7-of-8 col-7-of-8--no-margin">
              <div className="small-spacing" />
               
              <div className="project__tag__container">
                  <span className="project__tag info-heading ">Processing</span>
                  <span className="project__tag info-heading ">Virtual Reality</span>
                </div>
            
                <div className="project__title__container info-heading__container">
                  <h2 className="project__title">
                    <span className="secondary-heading info-heading--uppercase info-heading--bold">{project.map(project => project.Name )}</span>
                  </h2>
                  </div>
                  <h2 className="project__date__container">
                    <span className="info-heading project__date">{"/ " + project.map(project => project.Date )}</span>
                  </h2>
                 
               
                <hr className="project__title__line line--thin"/>
        
                
              </div>
            </div>

            <div className="row">
                <div className="small-spacing" />
                  <div className="col-2-of-8 col-2-of-8--no-margin">
                    <div className="info-heading__container">
                      <span className="tertiary-heading info-heading--uppercase">Media</span>
                    </div>
                  </div>
                  <div className="col-5-of-8 col-5-of-8--no-margin">
                  <hr className="project__title__line line--thin"/>
                    <div className="project__video__container">
                        <video controls muted="muted" className="project__video">
                          <source src={require('../../assets/videos/cap_thumbnail.mp4').default} />
                        </video>
                        <div className="project__video__hidder"></div>
                        </div>
                        <hr className="project__title__line line--thin"/>
                        
                    
                    
                  </div>
                <div className="small-spacing" />
            </div>

            <div className="row">
                <div className="small-spacing" />
                  <div className="col-7-of-8 col-7-of-8--no-margin">
                    <div className="info-heading__container">
                      <span className="tertiary-heading info-heading--uppercase">About</span>
                    </div>
                    <div className="small-spacing"/>
            
                    <div className="paragraphe project__paragraphe">{project.map(project => project.Description )}</div>
                  </div>
                <div className="small-spacing" />
            </div>


            <div className="row">
                  <Exhibition currentProject={props.currentProject} />
                <div className="medium-spacing" />
            </div>            
           
        </div>
      </div>

      <footer className="footer">
       
        <div className="row">
          <div className="small-spacing" />
            <div className="col-2-of-8 col-2-of-8--no-margin"/>
            <div className="col-5-of-8 col-5-of-8--no-margin">
              <hr className="project__title__line line--hair"/>
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
