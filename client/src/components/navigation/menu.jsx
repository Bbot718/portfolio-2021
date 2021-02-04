//React
import React  from 'react';
import Axios from 'axios';

//GSAP
import gsap from 'gsap/gsap-core';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 

class Menu extends React.Component {
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

   componentDidUpdate(preState){
      if(this.state.menu !== preState.menu && this.props.currentProject === null){
         
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

   HandleClick(target){
      console.log(this.props.currentProject)
      this.props.scrollIntoView(document.querySelector(target))
   }
   
  render() {
    return (
      <ul className="navigation__menu">

               <li className="navigation__item__container"> 
                  <span onClick={() => this.HandleClick('#work')}  className="navigation__item info-heading ">Selected Work</span> 
                  <div className="navigation__current">
                     <span ref={menu => this.currentMenuItem[0] = menu}  id="navigation-selected--work" className="navigation__selected info-heading">—</span> 
                  </div>
               </li>
               <li className="navigation__item__container"> 
                  <span onClick={() => this.HandleClick('#about')} className="navigation__item info-heading ">About</span> 
                  <div className="navigation__current">
                     <span ref={menu => this.currentMenuItem[1] = menu} id="navigation-selected--work" className="navigation__selected info-heading">—</span> 
                  </div>
               </li>
               <li className="navigation__item__container"> 
                  <span onClick={() => this.HandleClick('#contact')}   className="navigation__item info-heading ">Contact</span> 
                  <div className="navigation__current">
                     <span ref={menu => this.currentMenuItem[2] = menu} id="navigation-selected--work" className="navigation__selected info-heading">—</span> 
                  </div>
               </li>
      </ul>
    )
  }
}

export default Menu;
