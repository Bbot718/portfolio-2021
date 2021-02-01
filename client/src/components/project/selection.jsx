import React, {useEffect, useState}  from 'react';
import Axios from 'axios';

import gsap from 'gsap';
import { Timeline } from 'gsap/gsap-core';

function Selection(props) {
   const [projects, setProjects] = useState([]);

   useEffect(() => {
      console.log(props.handleProjectToggle)

      Axios
      .get('http://localhost:3006/api/project')
        .then(res => { setProjects(res.data) 
         console.log(res.data)
      })
        .catch(e => console.log(e));

      console.log(props.switchPage)
   }, []);  

   function HandleHover(id){
      const timeline = new Timeline();
      timeline.to('.project__selection__label', {y:'-150%', 
         onComplete:()=>{gsap.set('.project__selection__label', {y:'150%'})}})
      timeline.to('.project__selection__label', { y: 0 })
   }

   function HandleOut(){
      const timeline = new Timeline();
      timeline.to('.project__selection__label', {y:'-150%', onComplete:()=>{gsap.set('.project__selection__label', {y:'150%'})}})
      timeline.to('.project__selection__label', { y: 0 })
   }

   function HandleClick(){
      
      props.SwitchProjectId(1);
   }

  return (
      <div className="row">
         <div className="col-3-of-4 col-3-of-4--no-margin">
            <hr className="project__title__line line--thin"/>
            <div className="project__selection">
               <div className="project__selection__controls__container project__selection__controls__container--left">
                  <div  onMouseEnter={() => HandleHover()} 
                        onMouseLeave={() => HandleOut()} 
                        onClick={HandleClick}
                        className="project__selection__controls"> 
                  <span className="info-heading">{"Previous Project | " + projects.find(project => project.id === 0 )}</span>
               </div>
            </div>
            <div className="project__selection__label__container project__selection__controls__container--center">
               <div className="project__selection__label info-heading info-heading--bold">Home </div>
            </div>
            <div className="project__selection__controls__container project__selection__controls__container--right">
                  <div onClick={() => HandleHover(projects, props.currentProject.id, props.switchPage, props.handleProjectToggle)} className="project__selection__controls"> 
                  <span className="info-heading">Next  Project</span>
               </div>
            </div>
         </div>
         <hr className="project__title__line line--thin"/>
      </div>
   </div>

  )

}



export default Selection;


