import {gsap, Power4 }from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 

const ElementScrolltrigger = (element, trigger, UpdateFirstPassage, section) => {


  ScrollTrigger.create({
    stagger: 0.1,
    trigger: trigger,
    duration: 5,
    start: "top center",
    toggleActions: "play none none none",
    animation: gsap.from(element, { y: '110%', duration: 1,ease: Power4.easeOut, stagger: 0.05, onComplete:() => {
      UpdateFirstPassage && UpdateFirstPassage(section)
    }}),
    
  })
}

export default ElementScrolltrigger;