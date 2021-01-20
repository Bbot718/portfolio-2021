//React
import React  from 'react';
import Axios from 'axios';

//GSAP
import gsap from 'gsap/gsap-core';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 
class Navigation extends React.Component {
   constructor(props) {
      super(props);

      this.state ={ menu: [] }
      this.currentMenuItem = [];

    }


    componentDidMount() {
      Axios
      .get('http://localhost:3006/api/menu')
        .then(res => { this.setState({ menu: res.data })})
        .catch(e => console.log(e));
    }

    componentDidUpdate(preProps, preState){
      if(this.state.menu !== preState.menu){
         for(let i = 0; i < this.state.menu.length; i++){
            ScrollTrigger.create({
               trigger: this.state.menu[i].Target,
               start: "top center",
               end: "bottom center",
           
               onEnter: () => {gsap.to(this.currentMenuItem[i], {x: 0})},
               onEnterBack: () => {gsap.to(this.currentMenuItem[i], {x: 0})}, 
               onLeave: () => {gsap.to(this.currentMenuItem[i], {x: '-100%'})},
               onLeaveBack: () => {gsap.to(this.currentMenuItem[i], {x: '-100%'})},
            })
            
         }
      }
   }
   
  render() {
    return (
      <section className="navigation">
         
         {/* Current Section */}
         <div className="navigation__top"> 
            <div className="header__name__container">
               <div className={"header__name info-heading info-heading--bold info-heading--"+ this.props.theme}>Benjamin Botros</div>
            </div>
            
            <div className="header__name__container">
               <div className={"header__name info-heading info-heading--"+ this.props.theme}>Interaction Designer</div>
            </div>
         </div>

         {/* Menu */}
         <div className="navigation__center">
            <ul className="navigation__menu">
               { 
                  this.state.menu.map((menu, i) => (
                     <li className="navigation__item__container"> 
                        <span /*{ref={this.menuItems.link}}*/
                              onClick={() => this.props.scrollIntoView(document.querySelector(menu.Target))}  
                              className="navigation__item info-heading">{ menu.Name }</span> 
                        <div className="navigation__current">
                           <span ref={menu => this.currentMenuItem[i] = menu } id="navigation-selected--work" className="navigation__selected info-heading">—</span> 
                        </div>
                     </li>
                  ))
               }
            </ul>
         </div>
         

         {/* Email */}
         <div className="navigation__bottom">
            <div className="header__mail__container"> 
               <span className={"header__mail info-heading info-heading--"+ this.props.theme}>
                  <a href="mailto:hello@benjaminbotros.ch">Email Me</a>
               </span> 
            </div>
         </div>
        

      </section>
         
      
    )
  }
}

export default Navigation;
