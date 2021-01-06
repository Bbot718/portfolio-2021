import {gsap, Power4 }from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 

const ElementOut = (element, trigger) => {
   gsap.to(element,{
      duration: .5,
      scrollTrigger: {
        trigger: trigger,
        start: "top center",
        toggleActions: "play none none none",
        scrub: 0.1
      },
      y: '-110%'
    })
}

export default ElementOut;