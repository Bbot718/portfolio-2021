import {gsap, Power2 }from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 

const ImageIn = (element, trigger) => {
   gsap.from(element,{
      duration: 1,
      scrollTrigger: {
        trigger: trigger,
        start: "top center",
        toggleActions: "play none none none",
      },
      scaleY: 1,
      ease: Power2.easeOut, 
    })
}

export default ImageIn;