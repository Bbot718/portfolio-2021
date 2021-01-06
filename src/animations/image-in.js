import {gsap, Power4 }from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 

const ImageIn = (element, trigger) => {
   gsap.from(element,{
      duration: .5,
      scrollTrigger: {
        trigger: trigger,
        start: "top center",
        toggleActions: "play none none none",
      },
      scaleY: 1
    })
}

export default ImageIn;