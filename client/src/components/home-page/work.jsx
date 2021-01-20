//React
import React, { Component }  from 'react';

import Axios from 'axios';

//Transitions
import TitleIn from '../../animations/scrolltrigger/title-in' 
import ElementScrolltrigger from '../../animations/scrolltrigger/element-scrolltrigger.js';
import ImageIn from '../../animations/scrolltrigger/image-in.js';
import LineIn from '../../animations/scrolltrigger/line-in.js';

//GSAP
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 


class Work extends Component{
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      tags: []
    };

    this.title = {
      trigger: React.createRef(),
      name: React.createRef(),
      line: React.createRef()
    }
      
    this.project = {
      trigger: [],
      image: [],
      video: [],
      name: [],
      date: [],
      line: []
    }
  }


  componentDidMount() {
    Axios
    .get('http://localhost:3006/api/project')
      .then(res => { this.setState({ projects: res.data })})
      .catch(e => console.log(e));

    Axios
    .get('http://localhost:3006/api/tag')
      .then(res => { this.setState({ tags: res.data })})
      .catch(e => console.log(e));
  }

  componentDidUpdate(preProps, preState){
    if(this.state.projects !== preState.projects){
      TitleIn(this.title.name, this.title.trigger, this.title.line)

      for(let i = 0 ; i < this.state.projects.length; i++){
         ImageIn(this.project.image[i], this.project.trigger[i])
         ElementScrolltrigger(this.project.name[i], this.project.trigger[i])
         ElementScrolltrigger(this.project.date[i], this.project.trigger[i])
         LineIn(this.project.line[i], this.project.trigger[i], 3.2);
      }
    }
  }

  handleMouseEnter(i) {this.project.video[i].play()}


  handleClick(id) {
    const duration = 1;
    //Project Out
    for(let i =0; i < this.state.projects.length; i++){
      gsap.to(this.project.image[i], { scaleY: 1, duration: duration }) //Image Out
      this.project.date[i].classList.contains('element-animated') && gsap.to(this.project.date[i], {y: '-100%', duration: duration}); //Date Out
      this.project.name[i].classList.contains('element-animated') && gsap.to(this.project.name[i], {y: '-100%', duration: duration}); //Name Out      
      gsap.to(this.project.line[i], { width: 0, duration: duration}) // Line Out
    }

    //Navigation Out
    gsap.to(['.navigation__item', '.navigation__selected'], { y: '-100%', duration: duration,  onComplete:() => {
      this.props.switchPage(this.state.projects[id]);
    }})
  }

  render(){
    return (
      <React.Fragment>
        <section ref={ref => this.title.trigger = ref} id="work" className="work">
          <div className="primary-heading__container">
            <span ref={ref => this.title.name = ref} className="work__title primary-heading">
              <div className="no-mobile">Selected </div>
              Work
            </span>
          </div>
          <hr ref={ref => this.title.line = ref} className="work__title__line line--thick" />
          <div className="container">      
              { 
                this.state.projects.map((project, i) => (

                  <React.Fragment>
                      <article  ref={project => (this.project.trigger[i] = project)} 
                                className="work-item row" 
                                onMouseEnter={() => this.handleMouseEnter(i)} 
                                onClick={() => this.handleClick(i)}                         
                      >
                      
                        <div className="col-3-of-11--no-margin">
                          <div className="work-item__image__container">
                            <video muted="muted" ref={project => (this.project.video[i] = project)}  className="work-item__image-video">
                              <source src={require('../../assets/videos/'+ project.Video_link).default}/>
                            </video>
                            <img  className="work-item__image" alt="" src={require('../../assets/images/'+ project.Image_link).default} />
                            <div ref={project => (this.project.image[i] = project)}   className="work-item__image-hidder"></div>
                          </div>
                        </div>
                        <div className="col-8-of-11--no-margin">
                          <div className="work-item__info">
                            <div className="work-item__tag__container">
                              {
                                //console.log(this.state.tags);
                                /*
                                this.state.tags.map((tag, j) => (
                                  console.log(tag => this.tag.Name[j] = tag)
                                  
                                ))*/
                              }
                            </div>
                            <div className="info-heading__container">
                              <span ref={project => (this.project.date[i] = project)} 
                                    className="work-item__date info-heading">
                                {project.Date}
                              </span>
                            </div>
                            <div className="secondary-heading__container">
                              <span ref={project => (this.project.name[i] = project)} 
                                    className="work-item__name secondary-heading">
                                {project.Name}
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    <hr ref={project => (this.project.line[i] = project)} className="work__line line--thin" />
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
