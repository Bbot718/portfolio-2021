import React  from 'react';

class Contact extends React.Component {

  render() {
    return (
      <section className="contact">
         <div className="primary-heading__container">
            <span className="about__title primary-heading">Contact</span>
         </div>
         <hr className="about__line line--thick" />
         <div className="medium-spacing" />

         <div className="container">
            <div className="row">
               <div className="col-1-of-2--no-margin">
                  <p className="paragraphe">
                  Whether it is for a freelance project, a job or simply a coffee don’t hesitate to contact me. I would be more than happy to speak about your upcoming digital project. ;)
                  </p>
               </div>
            </div>
         </div>

         <div className="medium-spacing" />
         <div className="large-link__container">
            <a href="mailto:hello@benjaminbotros.ch">
               <span className="about__title large-link">hello@benjaminbotros.ch</span>
            </a>
         </div>

      </section>
    )
  }
}

export default Contact;
