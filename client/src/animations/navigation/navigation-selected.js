
import {gsap, Power4 }from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 

const NavigationSelected = (element, trigger) => {

  ScrollTrigger.create({
    trigger: trigger,
    start: "top center",
    end: "bottom center",

    onEnter: () => {gsap.to(element, {x: 0})},
    onEnterBack: () => {gsap.to(element, {x: 0})}, 
    onLeave: () => {gsap.to(element, {x: '-100%'})},
    onLeaveBack: () => {gsap.to(element, {x: '-100%'})},
  })
}

export default NavigationSelected;