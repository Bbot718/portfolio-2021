import {gsap, Power4 }from 'gsap';

const ElementIn = (element) => {
   gsap.from(element, { y: '110%', duration: .5, stagger: 0.05})
}

export default ElementIn;