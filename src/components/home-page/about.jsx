import React  from 'react';

class About extends React.Component {

  render() {
    return (
      <section className="about">
         <div className="primary-heading__container">
            <span className="about__title primary-heading">About</span>
         </div>
         <hr className="about__line line--thick" />
         <div className="medium-spacing" />
         <div className="about__content container">
            <div className="row">
               <div className="col-4-of-11--no-margin">
                  image
               </div>
               <div className="col-11-of-11--no-margin">
                  <p className="paragraphe">I’m a designer who loves to code and a coder who loves to design. Bringing these two competences together opens innovative  solutions for digital spaces. I’m especially excited about developing interactive systems whether it is for the web, VR or any other digital projects.</p> 
                  <p className="paragraphe">Having graduated from ECAL in 2016 with a distinction I started working as a 3D developer with focus in VR. Growing up in a multicultural environment I am both comfortable communicating in French and English and have basics in German.</p>
               </div>
            </div>
         </div>

      </section>
    )
  }
}

export default About;
