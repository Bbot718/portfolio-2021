import React, { Component }  from 'react';
import ReactDOM from "react-dom";
import Axios from 'axios';

import WorkItem from './work-item';

class Work extends Component{
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      Tags: []
    };

    this.cards = [];
    //this.tl = new TimelineMax({ paused: true });
    //this.toggleAnimation = this.toggleAnimation.bind(this);
  }


  componentDidMount() {
    Axios
    .get('http://localhost:3006/api/get_project')
      .then(res => {
        this.setState({ projects: res.data }, () => {
          console.log(this.state.projects);
        });
      })
      .catch(e => console.log(e));


      console.log(this.state.projects)
  }

  render(){
    return (
      <React.Fragment>
      <div className="large-spacing" />
      <div className="large-spacing" />
        <section id="work" className="work">
          <div className="primary-heading__container">
            <span className="work__title primary-heading">
            
              { (window.innerWidth > 768) ? "Selected Work" : "Work" }
            </span>
          </div>
          <hr className="work__title__line line--thick" />
          <div className="container">
        
            <WorkItem  
              id="0"
              date="2019"
              name="Camel Air Paint"
              image="cap_detailed.png"
              imageHover="cap_detailed.png"
              tags={['Virtual Reality','Unity']}  />
          

              { 
                this.state.projects.map((project, i) => (
                  <div key={project.id} ref={project => (this.cards[i] = project)}>
                    <WorkItem  
                      id={project.id}
                      date={project.Date}
                      name={project.Name}
                      image={project.Image_link}
                      imageHover={project.Video_link}
                      tags={['Virtual Reality','Unity']}   
                    />
                  </div>
                ))
                /*
                this.state.projects.map((projects, i) => {
                  return(
                    <WorkItem  
                    key={project.id}
                    id={project.id}
                    date={project.Date}
                    name={project.Name}
                    image={project.Image_link}
                    imageHover={project.Video_link}
                    /*
                    tags={
                      tagList.map((tag) => {
                        if(tag.project_num === project.id){
                          return (
                            [tag.Name]
                          )
                        }
                        
                      })
                      //['Virtual Reality','Unity']
                    }  
                    */
                  //  />

                  //) 
                //})
              }
              
            
          </div>
          <div className="large-spacing" />
        </section>
      </React.Fragment>
    )
  }
}


export default Work;
