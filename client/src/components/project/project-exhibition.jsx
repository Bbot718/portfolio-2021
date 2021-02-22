import React, { useEffect, useState } from 'react';

import Axios from 'axios';

import {gsap, Power4 }from 'gsap';
import { Timeline } from 'gsap/gsap-core';



const Exhibition = (props) => {
   const [exhbition, setExhibition] = useState([]);
   const [location, setLocation] = useState([]);

   useEffect(() => {
     
      Axios
      .get('http://localhost:3006/api/exhibition_' + props.currentProject)
        .then(res => { setExhibition(res.data)
        })
        .catch(e => console.log(e));

        Axios
        .get('http://localhost:3006/api/location')
          .then(res => { setLocation(res.data)
          })
          .catch(e => console.log(e));
   }, [props.currentProject])



  return (
    <React.Fragment>

      {/* Title */}
     
      <div className="col-1-of-6 col-1-of-6--no-margin">
         <div className="info-heading__container">
            <span className="project__label tertiary-heading info-heading--uppercase">{exhbition.length !== 0  && "Exhibition(s)" }  </span>
         </div>
      </div>

      <div className="col-4-of-6 col-4-of-6--no-margin">
      <div className="container">

      {exhbition.map((exhbitions, i) => (     
         <React.Fragment>
            <div className="row">
               <div className="col-1-of-2 col-1-of-2--no-margin">
                  <div className="project__exhibition__container">
                     <span className="info-heading project__exhibition"> <span className="info-heading--bold">{exhbitions.name}</span>{" / " + exhbitions.date}</span>
                  </div>
               </div>
               <hr className="project__title__line line--thin"/>
               <div className="col-1-of-2 col-1-of-2--no-margin">
              
                  {location.map((locations, j) => (
                     
                     <div className="info-heading__container project__exhibition__container">
                        {exhbitions.id === locations.exhibition_num &&  <span className="info-heading project__exhibition">
                           {locations.city + ", " + locations.country}
                        </span>}
                     </div>
                     
                  ))}
                  
               </div>
                     
            </div>
         
         </React.Fragment>
      ))}
   </div>
</div>
      
    </React.Fragment>
  )

}

export default Exhibition;
