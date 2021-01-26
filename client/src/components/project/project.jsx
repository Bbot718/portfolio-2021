import React, { useEffect } from 'react';

import Selection from './selection.jsx'

import gsap from 'gsap';
import { Timeline } from 'gsap/gsap-core';
import { SplitText } from 'gsap/all';

const Project = (props) => {

  
  useEffect(() => {
    const paragrapheSTContainer = new SplitText('.project__paragraphe', {type: "lines", linesClass: 'project__paragraphe__container' })
    const paragrapheST = new SplitText('.project__paragraphe', {type: "lines" })
    const paragrapheLines = paragrapheST.words;

    //Project In
    const titlTl = new Timeline( {delay: 2} );
    titlTl.from('.project__title__line', { width: 0 });
    titlTl.to('.project__video__hidder', {scaleY: 0 })
    titlTl.from('.project__title', { y: '100%' })
    titlTl.from('.project__selection__controls', { y: '110%' })
    titlTl.from('.project__line', { width: 0 });
    titlTl.from(paragrapheLines, { y: '100%', stagger: 1 });
  }, [])

  function HandleProjectToggle(){
    console.log("coucouc");

    const timeline = new Timeline();
    timeline.to('.project__selection__controls', { y: '110%' })
    timeline.to('.project__title__line', { width: 0 });
    timeline.to('.project__video__hidder', {scaleY: '100%' })
    timeline.to('.project__title', { y: '100%' })
    
    timeline.from('.project__line', { width: 0 });
  }

  function HandleHomeToggle(){
    
  }


  return (
    <React.Fragment>
      <div className="project">
        <div className="container">

          <Selection  currentProject={props.currentProject} 
                      switchProject={props.switchPage}
                      handleProjectToggle={HandleProjectToggle}
                      handleHomeToggle={HandleHomeToggle} />                 

          <div className="row">
            <div className="col-3-of-4 col-3-of-4--no-margin">
              <div className="project__title__container info-heading__container">
                <h2 className="project__title">
                  <span className="secondary-heading info-heading--bold">{ props.currentProject.Name }</span>
                  <span className="info-heading">{  " / " + props.currentProject.Date}</span>
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
                  <div className="project__video__controls info-heading">▶</div>
                </div>
                <div className="medium-spacing" />
                <div className="col-3-of-4 col-3-of-4--no-margin">
                  <div className="tertiary-heading info-heading--bold">A VR Experience for fucking airports </div>
                  <div className="paragraphe project__paragraphe">{props.currentProject.Description}</div>
                  <div className="medium-spacing" />
                </div>
              </div>
            </div>
            <div className="bottom-spacing" />
        </div>
      </div>

      

    </React.Fragment>
  )

}

export default Project;
