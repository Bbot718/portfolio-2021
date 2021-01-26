import {gsap, Power4 }from 'gsap';
import ElementIn from '../in/element-in.js'
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 

const ElementScrolltrigger = (element, trigger) => {


  ScrollTrigger.create({
    stagger: 0.1,
    trigger: trigger,
    start: "top center",
    toggleActions: "play none none none",
    animation: gsap.from(element, { y: '110%', duration: .3, stagger: 0.05}),
    onEnter: () => {
      //element.classList.add('animation-complete')
    }
  })
}

export default ElementScrolltrigger;