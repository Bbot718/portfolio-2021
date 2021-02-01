import React, { useEffect, useState } from 'react';

import Axios from 'axios';

//Components
import Selection from './selection.jsx';

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
    SetData();
    console.log("current Project: " + props.currentProject)

     
  }, [])

  function SetData(){
    console.log('ha');

    Axios
    .get('http://localhost:3006/api/project_'+ props.currentProject)
      .then(res => { setProject(res.data)
        console.log(res.data)
      })
      .catch(e => console.log(e));
  }


  return (
    <React.Fragment>
      <div className="project">
        <div className="container">

          <Selection  currentProject={props.currentProject} 
                      SwitchProjectId={props.SwitchProjectId} 
                      SetData={SetData}  
                      />                 

            <React.Fragment>
            <div className="row">
              <div className="col-3-of-4 col-3-of-4--no-margin">
                <div className="project__title__container info-heading__container">
                  <h2 className="project__title">
                    <span className="secondary-heading info-heading--bold">{project.map(project => project.Name )}</span>
                    <span className="info-heading">{"/ " + project.map(project => project.Date )}</span>
                  </h2>
                </div>
                <hr className="project__title__line line--thin"/>
              </div>
            </div>

            <div className="row">
              <div className="col-3-of-4 col-3-of-4--no-margin">
                <div className="project__video__container">
                  <div className="project__video__hidder" />
                  <video className="project__video">
                    <source src={require('../../assets/videos/cap_thumbnail.mp4').default}/>
                  </video>
                </div>
                <hr className="project__title__line line--thin"/>
                <div className="medium-spacing" />
                <div className="col-3-of-4 col-3-of-4--no-margin">
                  <div className="tertiary-heading info-heading--bold">A VR Experience for fucking airports </div>
                  <div className="medium-spacing" />
                  <div className="paragraphe project__paragraphe">{project.map(project => project.Description )}</div>
                  <div className="medium-spacing" />
                </div>
              </div>
            </div>

            </React.Fragment>

            <div className="bottom-spacing" />
        </div>
      </div>

      

    </React.Fragment>
  )

}

export default Project;
