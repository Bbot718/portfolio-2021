
import {gsap, Power4 }from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 

const LineIn = (element, trigger, duration) => {

   gsap.from(element,{
     duration: duration /3,
      stagger: 0.1,
      scrollTrigger: {
        trigger: trigger,
        start: "top center",
        toggleActions: "play none none none",
      },
      width:0,
    })

   

}

export default LineIn;