import React, { useRef, useEffect } from 'react'

//Transitions
import TitleIn from '../../animations/scrolltrigger/title-in.js';
import ParagrapheIn from '../../animations/scrolltrigger/paragraphe-in.js';

function About(props) {
   useEffect(() => {
      if(props.isFirstPassage.about){
         TitleIn('.about__title', '.about', '.about__line');
         ParagrapheIn('.about__paragraphe', '.about__content', props.UpdateFirstPassage, "about");
      }
   }, [])


   return (
      <section id="about" className="about">
         <div className="primary-heading__container">
            <span className="about__title primary-heading">About</span>
         </div>


         <div  className="about__content container">
            <div className="row">
               <div className="col-4-of-11--no-margin">
                  
               </div>
               <div className="col-11-of-11--no-margin"> 
                  <p className="about__paragraphe paragraphe">I’m a designer who loves to code and a coder who loves to design. Bringing these two competences together opens innovative  solutions for digital spaces. I’m especially excited about developing interactive systems whether it is for the web, VR or any other digital projects.Having graduated from ECAL in 2016 with a distinction I started working as a 3D developer with focus in VR. Growing up in a multicultural environment I am both comfortable communicating in French and English and have basics in German.</p>
               </div>
            </div>
         </div>
      </section>
   )
  
}

export default About;
