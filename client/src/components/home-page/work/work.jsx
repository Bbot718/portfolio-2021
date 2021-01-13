import React, { useState, useEffect}  from 'react';
import Axios from 'axios';

import WorkItem from './work-item';

function Work(){
  const [projectList, setProjectList] = useState([])
  const [tagList, setTagList] = useState([])
  
  useEffect(() => {
    Axios.get('http://localhost:3006/api/get_project').then((response) => {  
      setProjectList(response.data)
    })

    Axios.get('http://localhost:3006/api/get_tag').then((response) => {  
      setTagList(response.data)
      console.log(response.data)
    })

  }, [])
  
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
           <h1 className="primary-heading"> {projectList.Name} </h1>
          <div className="container">
         
            <WorkItem  
              id="0"
              date="2019"
              name="Camel Air Paint"
              image="cap_detailed.png"
              imageHover="cap_detailed.png"
              tags={['Virtual Reality','Unity']}  />
          

              { 
                projectList.map((project) => {
                  return(
                    <WorkItem  
                    key={project.id}
                    id={project.id}
                    date={project.Date}
                    name={project.Name}
                    image={project.Image_link}
                    imageHover={project.Video_link}
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

                    />

                  ) 
                })
              }
              
            
          </div>
          <div className="large-spacing" />
        </section>
      </React.Fragment>
  )
}


export default Work;
