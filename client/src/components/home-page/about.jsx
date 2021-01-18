import React, { Component }  from 'react';

import TitleIn from '../../animations/transtitions/title-in.js';
import ParagrapheIn from '../../animations/transtitions/paragraphe-in.js';

class About extends Component {
   constructor(props) {
      super(props);
  
      this.title = {
        trigger: React.createRef(),
        name: React.createRef(),
        line: React.createRef()
      }
        
      this.paragraphe = React.createRef()
   }

   componentDidMount(){
      TitleIn(this.title.name,this.title.trigger, this.title.line);
   }

   componentDidUpdate(){
      console.log('ieurshfguirehbi');
      TitleIn(this.title.name,this.title.trigger, this.title.line);
      //ParagrapheIn('.about__paragraphe', '.about__content');
      
    }

  render() {
    return (
      <section ref={ref => this.title.trigger = ref} id="about" className="about">
         <div className="primary-heading__container">
            <span ref={ref => this.title.name = ref} className="about__title primary-heading">About</span>
         </div>
         <hr ref={ref => this.title.line = ref} className="about__line line--thick" />
         <div className="medium-spacing" />
         <div className="about__content container">
            <div className="row">
               <div className="col-4-of-11--no-margin">
                  
               </div>
               <div className="col-11-of-11--no-margin"> 
                  <div className="info-heading__container">
                     <span className="exhibition__title info-heading">A Few Words</span>
                  </div>
                  <p className="about__paragraphe paragraphe">I’m a designer who loves to code and a coder who loves to design. Bringing these two competences together opens innovative  solutions for digital spaces. I’m especially excited about developing interactive systems whether it is for the web, VR or any other digital projects.Having graduated from ECAL in 2016 with a distinction I started working as a 3D developer with focus in VR. Growing up in a multicultural environment I am both comfortable communicating in French and English and have basics in German.</p>
               </div>
            </div>
         </div>

      </section>
    )
  }
}

export default About;
