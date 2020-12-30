import React  from 'react';

class Navigation extends React.Component {

   
  render() {
    return (
      <section className="navigation">
         
         {/* Current Section */}
         <div className="navigation__current"> 
            <div className={"info-heading info-heading--bold info-heading--"+ this.props.theme}>Benjamin Botros</div>
            <div className={"info-heading info-heading--"+ this.props.theme}>Interaction Designer</div> 
         </div>

         {/* Menu */}
         <ul className="navigation__menu">
            <li className="navigation__item"> 
               <span className="info-heading">Selected Work</span> 
            </li>
            <li className="navigation__item">
               <span className="info-heading">About</span> 
            </li>
            <li className="navigation__item">
               <span className="info-heading">Contact</span> 
            </li>
         </ul>

         {/* Email */}
         <div className="header__mail"> 
            <span className={"info-heading info-heading--"+ this.props.theme}>
               <a href="mailto:hello@benjaminbotros.ch">Email Me</a>
            </span> 
         </div>

      </section>
         
      
    )
  }
}

export default Navigation;
