//React
import React  from 'react';

//Components 
import Menu from './menu.jsx'
import Current from './current.jsx'

class Navigation extends React.Component {   
  render() {
    return (
      <section className="navigation">
         
         {/* Current Section */}
         <div className="navigation__top"> 
            <div className="header__name__container">
               <div className={"header__name info-heading info-heading--bold info-heading--"+ this.props.theme}>Benjamin Botros</div>
            </div>
            
            <div className="header__name__container">
               <div className={"header__name info-heading info-heading--dark"}>Interaction Designer</div>
            </div>
         </div>

         {/* Menu */}
         <div className="navigation__center">
            {
               (!this.props.currentProject) ? (
                  <Menu scrollIntoView={this.props.scrollIntoView} />
               ):( 
                  <Current currentProject={this.props.currentProject} />
               )
            }
            
            
         </div>
         

         {/* Email */}
         <div className="navigation__bottom">
            <div className="header__mail__container"> 
               <span className={"header__mail info-heading info-heading--"+ this.props.theme}>
                  <a href="mailto:hello@benjaminbotros.ch">Email Me</a>
               </span> 
            </div>
         </div>
         <div className="navigation__background"></div>
      </section>
    )
  }
}

export default Navigation;
