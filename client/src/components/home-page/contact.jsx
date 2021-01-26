import React, { useEffect } from 'react'

//Transitions
import ElementIn from '../../animations/scrolltrigger/element-in.js'
import ParagrapheIn from '../../animations/scrolltrigger/paragraphe-in.js';
import TitleIn from '../../animations/scrolltrigger/title-in.js';

function Contact(props) {

   useEffect(() => {
      TitleIn('.contact__title', '.contact', '.contact__line');
      ParagrapheIn('.contact__paragraphe', '.contact__paragraphe');
      ElementIn('.contact__mail__content', '.contact');
   }, [])


   return (
      <section id="contact" className="contact">
         <div className="primary-heading__container">
            <span className="contact__title primary-heading">Contact</span>
         </div>
         <hr className="contact__line line--thick" />
         <div className="medium-spacing" />

         <div className="container">
            <div className="row">
               <div className="col-1-of-2--no-margin">
                  <p className="contact__paragraphe paragraphe">
                  Whether it is for a freelance project, a job or simply a coffee don’t hesitate to contact me. I would be more than happy to speak about your upcoming digital project. ;)
                  </p>
               </div>
            </div>
         </div>

         <div className="medium-spacing" />
         <div className="contact__mail large-link__container">
            <a href="mailto:hello@benjaminbotros.ch">
               <span className="contact__mail__content large-link">hello@benjaminbotros.ch</span>
            </a>
         </div>
      </section>
   )  
}

export default Contact;
