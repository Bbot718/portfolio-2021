import {gsap, Power4 }from 'gsap'; 
import HeaderAnimation from '../header/header-animation.js';

const HeaderIn = () => {
   console.log('hederIn');

   const timeline = new gsap.timeline({ delay: 1, onComplete: () => {
      const headerAnimation = new HeaderAnimation('.header__title');
      headerAnimation.Play(); 
   }});

   timeline.from('.header-heading', {y: '100%', stagger: 0.1}) //Header
   timeline.from('.header__name', {y: '100%', stagger: 0.1, delay: -0.5}) //Name
   timeline.from('.navigation__item', {y: '100%', stagger: 0.1, delay: -0.5}) //Navigation
   timeline.from('.header__mail', {y: '100%'}); //Email
   

   
   

   //Navigation

   ///Header
}

export default HeaderIn;