import {gsap, Power4 }from 'gsap';
import ElementIn from '../in/element-in.js'
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 

const ElementScrolltrigger = (element, trigger) => {

  ScrollTrigger.create({
    trigger: trigger,
    start: "top center",
    toggleActions: "play none none none",
    animation: gsap.from(element, { y: '110%', duration: .5, stagger: 0.05}),
  })
}

export default ElementScrolltrigger;