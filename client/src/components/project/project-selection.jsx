import React, { useEffect, useState } from 'react';

import Axios from 'axios';

import {gsap, Power4 }from 'gsap';
import { Timeline } from 'gsap/gsap-core';



const Selection = (props) => {
   const [previousProject, setPreviousProject] = useState([]); 
   const [nextProject, setNextProject] = useState([]); 

   useEffect(() => {
      HandleSetData();
   }, [])

   function HandleSetData(){
      Axios
      .get('http://localhost:3006/api/project_' + (props.currentProject + 1))
        .then(res => { setPreviousProject(res.data)})
        .catch(e => console.log(e));
      
        Axios
      .get('http://localhost:3006/api/project_' + ( props.currentProject - 1))
         .then(res => { setNextProject(res.data)})
         .catch(e => console.log(e));
   }

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
      HandleSetData();
   }

   function HandleBackHome(){
      console.log('back home')
      props.SwitchProject(0)
      props.scrollIntoView(document.querySelector('#work'))

      console.log(document.querySelector('#work'));
   }



  return (
    <React.Fragment>
      <div className="selection">

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
                     <div className="selection__label" onClick={() => HandleBackHome()}>
                        <span className="selection__label__text info-heading info-heading--uppercase info-heading--bold">Back To home Page</span>
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

      </div>
      
    </React.Fragment>
  )

}

export default Selection;
