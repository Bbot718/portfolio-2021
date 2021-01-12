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
        onEnter: () => {
          if(element.includes("#work-item")){
            gsap.set(document.querySelector(element.split(" ")[0]), { 
              cursor: 'pointer',         
            })
          }
        }
      },
      y: '110%'
    })

    
 

}

export default ElementIn;