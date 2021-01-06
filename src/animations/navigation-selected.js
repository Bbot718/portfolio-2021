
import {gsap, Power4 }from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 

const NavigationSelected = (element, trigger) => {
   gsap.to(element,{
      scrollTrigger: {
        trigger: trigger,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
        onEnter: () => {
            gsap.to(element, { x: 0 })
        },
        onEnterBack: () => {
          gsap.to(element, { x: 0 })
        }, 
        onLeave: () => {
            gsap.to(element, { x: '-100%' })
        },
        onLeaveBack: () => {
         gsap.to(element, { x: '-100%' })
     },
      },
    })
}

export default NavigationSelected;