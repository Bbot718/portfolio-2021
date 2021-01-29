import React, {useEffect, useState, useRef}  from 'react';
import Axios from 'axios';

//GSAP
import gsap from 'gsap';
import { Timeline } from 'gsap/gsap-core';

//Transitions
import TitleIn from '../../animations/scrolltrigger/title-in' 
import ElementScrolltrigger from '../../animations/scrolltrigger/element-in.js';
import ImageIn from '../../animations/scrolltrigger/image-in.js';
import LineIn from '../../animations/scrolltrigger/line-in.js';

function HandleMouseEnter(video){
   video.play();
}


function Work(props){
   const [projects, setProjects] = useState([]);

   const [tags, setTags] = useState([]);


     
   let projectUI = {
      trigger: useRef([]),
      image: useRef([]),
      video: useRef([]),
      name: useRef([]),
      date: useRef([]),
      line: useRef([]),
   }

   useEffect(() => {
      let numberOfProjects

      Axios
      .get('http://localhost:3006/api/project')
        .then(res => { 
            setProjects(res.data); 
         })
        .catch(e => console.log(e));
      
         Axios
         .get('http://localhost:3006/api/tag')
         .then(res => { 
            setTags(res.data); 
          })
         .catch(e => console.log(e));
      

      //Work In  
      TitleIn('.work__title', '.work', '.work__title__line');

      for(let i = 0 ; i < numberOfProjects; i++){
         ImageIn(projectUI.image[i], projectUI.trigger[i])
         ElementScrolltrigger(projectUI.name[i], projectUI.trigger[i])
         ElementScrolltrigger(projectUI.date[i], projectUI.trigger[i])
         LineIn(projectUI.line[i], projectUI.trigger[i], 3.2);
      }
   }, [])

   return (
      <section id="work" className="work">
         <div className="primary-heading__container">
            <span className="work__title primary-heading">
               <div className="no-mobile">Selected </div>Work
            </span>
         </div>
         <hr className="work__title__line line--thick" />
         <div className="container">
            {
               projects.map((project, i) => (

                  <React.Fragment>
                     <article key={project.id} 
                              ref={(element) => projectUI.trigger.current.push(element)}
                              className="work-item row" 
                              onMouseEnter={() => HandleMouseEnter(projectUI.video.current[i])} 
                              onClick={() => props.HomePageOut(project.id, props)}>

                        <div className="col-3-of-11--no-margin">
                           <div className="work-item__image__container">
                              <video ref={(element) => projectUI.video.current.push(element)} muted="muted" className="work-item__image-video">
                                 <source src={require('../../assets/videos/'+ project.Video_link).default}/>
                              </video>
                              <img ref={(element) => projectUI.image.current.push(element)} className="work-item__image" alt="" src={require('../../assets/images/'+ project.Image_link).default} />
                              <div className="work-item__image-hidder"></div>
                           </div>
                        </div>

                        <div className="col-8-of-11--no-margin">
                           <div className="work-item__info">
                              <div className="work-item__tag__container">
                                 {  
                                    tags.map((tag, i) => (
                                       <React.Fragment>
                                          {tag.project_num === project.id && <div className="work-item__tag info-heading info-heading--medium info-heading--uppercase">{tag.Name}</div>}
                                       </React.Fragment>
                                    ))
                                 }
                              </div>
                              <div className="info-heading__container">
                                 <span ref={(element) => projectUI.date.current.push(element)} className="work-item__date info-heading ">
                                {project.Date}
                              </span>
                            </div>
                            <div className="secondary-heading__container">
                              <span ref={(element) => projectUI.name.current.push(element)} className="work-item__name secondary-heading">
                                {project.Name}
                              </span>
                            </div>
                          </div>
                        </div>

                     </article>
                     <hr ref={(element) => projectUI.line.current.push(element)} className="work__line line--thin" />
                  </React.Fragment>       

               ))
            }
         </div>
         <div className="large-spacing" />
      </section>

   );
}

export default Work;