//React
import React, { Component }  from 'react';

import Axios from 'axios';

//Scrolltriggers
import TitleIn from '../../animations/scrolltrigger/title-in' 
import ElementScrolltrigger from '../../animations/scrolltrigger/element-in.js';
import ImageIn from '../../animations/scrolltrigger/image-in.js';
import LineIn from '../../animations/scrolltrigger/line-in.js';

//Transitions


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
      hidder: [],
      image: [],
      video: [],
      name: [],
      date: [],
      line: [],
      tag: [], 
      hasAppeared: []
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
    if(this.state.projects !== preState.projects && this.props.isFirstPassage.work){
      TitleIn(this.title.name, this.title.trigger, this.title.line)


      for(let i = 0 ; i < this.state.projects.length; i++){
         ImageIn(this.project.hidder[i], this.project.trigger[i])
         ElementScrolltrigger(this.project.name[i], this.project.trigger[i])
         ElementScrolltrigger(this.project.date[i], this.project.trigger[i])
         ElementScrolltrigger(this.project.tag[i], this.project.trigger[i])

         LineIn(this.project.line[i], this.project.trigger[i], 3.2);

         ScrollTrigger.create({
          trigger: this.project.trigger[i],
          start: "top center",
          onEnter: () => { 
            gsap.set(this.project.image[i], {cursor: 'pointer' }) 
            this.project.hasAppeared[i] = true;
          } 
         })
      }
    }
  }

  handleMouseEnter(id) {
    this.project.video[id].play()

    gsap.to(this.project.image[id], { y: '-100%', ease: LineIn.easeNone , onComplete:() => {
      gsap.set(this.project.image[id], {y: '100%'})
    }})
  }


  handleMouseLeave(id) {
    gsap.to(this.project.image[id], { y: 0, onComplete:() => {
      //gsap.set(this.project.image[id], {y: '100%'})
    }})
  }


  render(){
    return (
      <React.Fragment>
        <section ref={ref => this.title.trigger = ref} id="work" className="work">
          <div className="primary-heading__container">
            <span ref={ref => this.title.name = ref} className="work__title primary-heading">

              Work
            </span>
          </div>
          <hr ref={ref => this.title.line = ref} className="work__title__line line--thick" />
          <div className="container">      
              { 
                this.state.projects.map((project, i) => (

                  <React.Fragment>
                      <article  key={i}
                                ref={project => (this.project.trigger[i] = project)} 
                                className="work-item row" 
                                
                                                       
                      >
                      
                        <div className="col-4-of-11--no-margin">
                          <div className="work-item__image__container" onMouseEnter={() => this.handleMouseEnter(i)} onMouseLeave={() => this.handleMouseLeave(i)}  onClick={  () => this.props.HomePageOut(i, this.project)} >
                            <video muted="muted" ref={project => (this.project.video[i] = project)}  className="work-item__image-video">
                              <source src={require('../../assets/videos/'+ project.Video_link).default}/>
                            </video>
                            <img ref={project => (this.project.image[i] = project)}  className="work-item__image" alt="" src={require('../../assets/images/'+ project.Image_link).default} />
                            <div ref={project => (this.project.hidder[i] = project)}   className="work-item__image-hidder"></div>
                           
                          </div>

                        </div>
                        <div className="col-7-of-11--no-margin">
                          <div className="work-item__info">
                          <div className="work-item__tag__container__container">
                            <div className="work-item__tag__container" ref={project => (this.project.tag[i] = project)}>


                            {
                              this.state.tags.map((tag, index) => {
                                  //console.log(tag.Tag_num +" - " + project.Project_num)
                                  if(tag.project_num === project.Project_num){
                                    return  <div  className="work-item__tag info-heading info-heading--medium info-heading--uppercase">{tag.Name}</div>
                                  }
                            })}
                            </div>
                            </div>
                            <div className="info-heading__container">
                              <span ref={project => (this.project.date[i] = project)} 
                                    className="work-item__date info-heading ">
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
