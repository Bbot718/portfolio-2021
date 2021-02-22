import React, { useEffect, useState } from 'react';

import Axios from 'axios';

import {gsap, Power4 }from 'gsap';
import { Timeline } from 'gsap/gsap-core';



const Selection = (props) => {

   const [previousProject, setPreviousProject] = useState([]); 
   const [nextProject, setNextProject] = useState([]); 

   useEffect(() => {

      let previousSelection = (props.currentProject === props.numberOfProjects -1) ? 0 : props.currentProject + 1
      let nextSelection = (props.currentProject === 0) ? props.numberOfProjects -1 : props.currentProject - 1


      Axios
      .get('http://localhost:3006/api/project_' + previousSelection)
      .then(res => { setPreviousProject(res.data)})
      .catch(e => console.log(e));  

      Axios
      .get('http://localhost:3006/api/project_' + nextSelection)
         .then(res => { setNextProject(res.data)})
         .catch(e => console.log(e));

   }, [props.currentProject, props.numberOfProjects])

   function HandleHover(name){
      const timeline = new Timeline();
      timeline.to('.selection__label__text', { y: '-100%', duration: 0.15, onComplete: () => { gsap.set('.selection__label__text', { y : '100%'}) }})
      timeline.to('.selection__label__text', { y: 0, duration: 0.15, onStart: () => {
         document.querySelector('.selection__label__text').innerHTML = (name) ? name : "Back To Home Page"
      }})
   } 


  return (
    <React.Fragment>
      <div className="selection">
         <hr className="project__title__line line--thin"/>
         <div className="container">
            <div className="row">

               <div className="col-1-of-3 col-1-of-3--no-margin selection__align--left">
                  <div className="selection__button__container">
                     <div  className="selection__button selection__button--left" 
                           onClick={() => {
                              gsap.to('.selection__label__text', { y: '-100%', duration: 0.15, onComplete: () => { gsap.set('.selection__label__text', { y : '100%'}) }})
                              props.SwitchProject(previousProject.map(project => project.id))
                              gsap.to('.selection__label__text', { y: 0, duration: 0.15, delay: 2, onStart: () => {
                                 document.querySelector('.selection__label__text').innerHTML = previousProject.map(project => project.Name)
                              }})
                           }}
                           onMouseEnter={() => HandleHover(previousProject.map(project => project.Name))} 
                           onMouseLeave={() => HandleHover()}>
                        <span className="info-heading info-heading--uppercase info-heading--white">Previous Project</span>
                     </div>
                  </div>
                  
               </div>

               <div className="col-1-of-3 col-1-of-3--no-margin">
                  <div className="selection__label__container">
                     <div className="selection__label" onClick={() => props.HandleBackHome()}>
                        <span className="selection__label__text info-heading ">Back To ome Page</span>
                     </div>
                  </div>
               </div>

               <div className="col-1-of-3 col-1-of-3--no-margin">
                  <div className="selection__button__container">
                     <div  className="selection__button selection__button--right" 
                           onClick={() => {
                              props.SwitchProject(nextProject.map(project => project.id, project => project.Name))

                           }}
                           onMouseEnter={() => HandleHover(nextProject.map(project => project.Name ))} 
                           onMouseLeave={() =>HandleHover()}>
                        <span className="info-heading info-heading--uppercase info-heading--white">Next Project</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <hr className="project__title__line line--thin"/>
      </div>
      
    </React.Fragment>
  )

}

export default Selection;
