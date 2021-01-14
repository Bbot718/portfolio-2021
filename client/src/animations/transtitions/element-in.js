import {gsap, Power4 }from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 

const ElementIn = (element, trigger) => {
   gsap.from(element,{
      duration: .5,
      stagger: 0.05,
      scrollTrigger: {
        trigger: trigger,
        start: "top center",
        toggleActions: "play none none none",
        
      },
      y: '110%'
    })

    
 

}

export default ElementIn;