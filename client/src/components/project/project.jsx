import React, { useEffect, useState } from 'react';

import Axios from 'axios';

//Components
import Selection from './project-selection'


//Transitions
import ProjectIn from '../../animations/transitions/project-in'

import gsap from 'gsap';
import { Timeline } from 'gsap/gsap-core';
import { SplitText } from 'gsap/all';

const Project = (props) => {
  const [project, setProject] = useState([]);
  const [data, setData] = useState();

  
  useEffect(() => {
    ProjectIn();
    HandleSetData();     
  }, [])

  function HandleSetData(){
    Axios
    .get('http://localhost:3006/api/project_'+ props.currentProject)
      .then(res => { setProject(res.data)
      })
      .catch(e => console.log(e));
  }

  function SwitchProject(id){
    props.SwitchProjectId(id[0])
    
  }


  return (
    <React.Fragment>
      <div className="project">
        <div className="container">

           

            <div className="row">
              <div className="col-4-of-4 col-4-of-4--no-margin">
                <div className="project__title__container info-heading__container">
                  <h2 className="project__title">
                    <span className="tertiary-heading info-heading--bold">{project.map(project => project.Name )}</span>
                    <span className="info-heading">{"/ " + project.map(project => project.Date )}</span>
                  </h2>
                </div>
               
              </div>
            </div>

            <div className="row">
              <div className="col-4-of-4 col-4-of-4--no-margin">
              <hr className="project__title__line line--thick"/>
                <div className="project__video__container">
                  <div className="project__video__hidder" />
                  <video className="project__video">
                    <source src={require('../../assets/videos/cap_thumbnail.mp4').default}/>
                  </video>
                </div>
                <hr className="project__title__line line--thin"/>
                <div className="medium-spacing" />
                <div className="col-1-of-4 col-1-of-4--no-margin">
                  <div className="secondary-heading info-heading--bold">A VR Experience for fucking airports </div>
                  <div className="medium-spacing" />
                  <div className="paragraphe project__paragraphe">{project.map(project => project.Description )}</div>
                  <div className="medium-spacing" />
                </div>
              </div>
            </div>  

            <div className="row">
              <div className="col-4-of-4 col-4-of-4--no-margin">
                <Selection currentProject={props.currentProject} SwitchProject={SwitchProject} scrollIntoView={props.scrollIntoView}/>
              </div>
            </div>
            <div className="bottom-spacing" />

            
        </div>
      </div>

      

    </React.Fragment>
  )

}

export default Project;
