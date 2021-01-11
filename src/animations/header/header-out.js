import {gsap, Power4 }from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 

const HeaderOut = () => {
   console.log('hey');

   gsap.to('.header-heading',{
      stagger: -.1,
      duration: 1,
      scrollTrigger: {
         duration: 5,
        trigger: '.header__background--dark',
        start: "center top",
        end: "center bottom",
        toggleActions: "play none none none",
        scrub: 1,
      }, y: '200%'
    })
}

export default HeaderOut;