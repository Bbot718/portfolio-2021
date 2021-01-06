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
            <li className="navigation__item__container"> 
               <span className="navigation__item info-heading">Selected Work</span> 
               <div className="navigation__current">
                  <span id="navigation--work" className="info-heading">—</span> 
               </div>
            </li>
            <li className="navigation__item__container">
               <span id="navigation--about" className="navigation__item info-heading">About</span> 
            </li>
            <li className="navigation__item__container">
               <span id="navigation--contact" className="navigation__item info-heading">Contact</span> 
            </li>
         </ul>

         {/* Email */}
         <div className="header__mail__container"> 
            <span className={"header__mail info-heading info-heading--"+ this.props.theme}>
               <a href="mailto:hello@benjaminbotros.ch">Email Me</a>
            </span> 
         </div>

      </section>
         
      
    )
  }
}

export default Navigation;
