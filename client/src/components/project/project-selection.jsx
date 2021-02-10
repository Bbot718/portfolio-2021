import React, { useEffect, useState } from 'react';

import Axios from 'axios';

import {gsap, Power4 }from 'gsap';
import { Timeline } from 'gsap/gsap-core';



const Selection = (props) => {
   const [previousProject, setPreviousProject] = useState([]); 
   const [nextProject, setNextProject] = useState([]); 

   useEffect(() => {
      if(props.currentProject < props.numberOfProjects){
         Axios
         .get('http://localhost:3006/api/project_' + (props.currentProject + 1))
         .then(res => { setPreviousProject(res.data)})
         .catch(e => console.log(e));
      }
      
      if(props.currentProject -1 >= 0){
        Axios
         .get('http://localhost:3006/api/project_' + ( props.currentProject - 1))
            .then(res => { setNextProject(res.data)})
            .catch(e => console.log(e));
      }

   }, [props.currentProject, props.numberOfProjects])

   function HandleHover(name){
      const timeline = new Timeline();
      timeline.to('.selection__label__text', { y: '-100%', onComplete: () => { gsap.set('.selection__label__text', { y : '100%'}) }})
      timeline.to('.selection__label__text', { y: 0, onStart: () => {
         document.querySelector('.selection__label__text').innerHTML = (name) ? name : "Back To home Page"
      }})
   }

   function HandleProjectSwitch(id){
      console.log(id);
      props.SwitchProject(id)

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
                           onClick={() => HandleProjectSwitch(previousProject.map(project => project.id))}
                           onMouseEnter={() => HandleHover(previousProject.map(project => project.Name))} 
                           onMouseLeave={() => HandleHover()}>
                        <span className="info-heading info-heading--white">Previous Project</span>
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
                           onClick={() => HandleProjectSwitch(nextProject.map(project => project.id))}
                           onMouseEnter={() => HandleHover(nextProject.map(project => project.Name ))} 
                           onMouseLeave={() =>HandleHover()}>
                        <span className="info-heading info-heading--white">Next Project</span>
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
