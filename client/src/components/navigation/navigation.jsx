//React
import React  from 'react';

//Components 
import Menu from './menu.jsx'

class Navigation extends React.Component {   
  render() {
    return (
      <section className="navigation">
         
         {/* Current Section */}
         <div className="navigation__top"> 
            <div className="header__name__container">
               <div className={"header__name info-heading info-heading--bold info-heading--uppercase "}>BENJAMIN BOTROS</div>
            </div>
            
            <div className="header__name__container">
               <div className={"header__name info-heading info-heading--uppercase"}>Interaction Designer</div>
            </div>
         </div>

         {/* Menu */}
         <div className="navigation__center">
            <Menu currentProject={this.props.currentProject} scrollIntoView={this.props.scrollIntoView} />   
         </div>
         

         {/* Email */}
         <div className="navigation__bottom">
            <div className="header__mail__container"> 
               <span className={"header__mail info-heading info-heading--"+ this.props.theme}>
                  <a href="mailto:hello@benjaminbotros.ch">EMAIL ME</a>
               </span> 
            </div>
         </div>
         <div className="navigation__background"></div>
      </section>
    )
  }
}

export default Navigation;
