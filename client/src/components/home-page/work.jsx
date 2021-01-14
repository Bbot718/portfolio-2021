import React, { Component }  from 'react';
import Axios from 'axios';

import WorkAnimations from '../../animations/home/work-animations.js'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Timeline } from 'gsap/gsap-core';
gsap.registerPlugin(ScrollTrigger); 


class Work extends Component{
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      Tags: []
    };

    this.references = {
      trigger: [],
      image: [],
      name: [],
      date: [],
      line: []
    }
  }


  componentDidMount() {
    Axios
    .get('http://localhost:3006/api/get_project')
      .then(res => { this.setState({ projects: res.data })})
      .catch(e => console.log(e));
  }

  componentDidUpdate(preProps, preState){
    if(this.state.projects !== preState.projects){
      //gsap.to(this.references.name,{ color: 'red', height: '1000px'})
      WorkAnimations(this.references);
    }
  }

    handleClick(e) {
      e.preventDefault();
      console.log(e)
    }

  render(){
    return (
      <React.Fragment>
      <div className="large-spacing" />
      <div className="large-spacing" />
        <section id="work" className="work">
          <div className="primary-heading__container">
            <span className="work__title primary-heading">
            
               Work
            </span>
          </div>
          <hr className="work__title__line line--thick" />
          <div className="container">      
              { 
                this.state.projects.map((project, i) => (

                  <React.Fragment>
                    <article ref={project => (this.references.trigger[i] = project)} className="work-item row" >
                        <div className="col-3-of-11--no-margin">
                          <div className="work-item__image__container">
                            <video className="work-item__image-video">
                              <source src={require('../../assets/videos/cap.mp4').default} />
                            </video>
                            <img  className="work-item__image" alt="" src={require('../../assets/images/'+ project.Image_link).default} />
                            <div ref={project => (this.references.image[i] = project)}   className="work-item__image-hidder"></div>
                          </div>
                        </div>
                        <div className="col-8-of-11--no-margin">
                          <div className="work-item__info">
                            <div className="work-item__tag__container"></div>
                            <div className="info-heading__container">
                              <span ref={project => (this.references.date[i] = project)} 
                                    className="work-item__date info-heading">
                                {project.Date}
                              </span>
                            </div>
                            <div className="secondary-heading__container">
                              <span ref={project => (this.references.name[i] = project)} 
                                    className="work-item__name secondary-heading">
                                {project.Name}
                              </span>
                            </div>
                          </div>
                        </div>
                    </article>
                    <hr ref={project => (this.references.line[i] = project)} className="work__line line--thin" />
                  </React.Fragment>

                ))
              }      
          </div>
          <div className="large-spacing" />
        </section>
      </React.Fragment>
    )
  }
}


export default Work;
