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
        .then(res => { setProjects(res.data) })
        .catch(e => console.log(e));

         console.log(projects);

   }, []);  

  return (
      <div className="row">
         <div className="col-3-of-4 col-3-of-4--no-margin">
            <hr className="project__title__line line--thin"/>
            <div className="project__selection">
               <div className="project__selection__controls__container project__selection__controls__container--left">
                  <div onClick={() => HandleClick(projects, props.currentProject.id, props.switchPage, props.handleProjectToggle)} className="project__selection__controls"> 
                  <span className="info-heading project__selection__arrow">{"<"}</span>
                  <span className="info-heading">Previous Project</span>
               </div>
            </div>
            <div className="project__selection__controls__container project__selection__controls__container--center">
               <div className="info-heading info-heading--bold">Home </div>
            </div>
            <div className="project__selection__controls__container project__selection__controls__container--right">
                  <div onClick={() => HandleClick(projects, props.currentProject.id, props.switchPage, props.handleProjectToggle)} className="project__selection__controls"> 
                  <span className="info-heading">Next  Project</span>
                  <span className="info-heading project__selection__arrow project__selection__arrow--right">{">"}</span>
               </div>
            </div>
         </div>
         <hr className="project__title__line line--thin"/>
      </div>
   </div>

  )

}

function HandleClick(projectList, project, switchPage, projectToggle){
   console.log(project)
   if(project != null){
      projectToggle();
      

      /*
      console.log(projectList)
      console.log(project)
      console.log(projectList)


      let index = projectList.id.indexOf(project);
      
      console.log(index)


      //Project Switch
      /*
      const timeline = new Timeline();
      timeline.to()
      */

     //switchPage()
   }
   else{
      //Back To HomePage
   }
}

function HandleMouseEnter(project){
   console.log(project)
}

function HandleMouseOut(project){
   console.log(project)
}



export default Selection;


