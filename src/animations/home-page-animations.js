


import HeaderAnimation from './header-animation.js';
import TitleIn from './title-in.js';
import ElementIn from './element-in.js';
import ElementOut from './element-out.js';
import ParagrapheIn from './paragraphe-in.js'
import ImageIn from './image-in.js';
import LineIn from './line-in.js';
/*
import TitleIn from './title-in.js';
import ElementIn from './element-in.js'

import LineIn from './line-in.js';

import MenuActive from './menu-active.js';
*/

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 


const HomePageAnimations = () => {
   ScrollTrigger.refresh();

   //Header
   const headerAnimation = new HeaderAnimation('.header-animation');
   headerAnimation.Play(); 

   //Work
   TitleIn('.work__title', '.work', '.work__title__line');
   for(let i = 0; i < document.querySelectorAll('.work-item').length; i++){
      ImageIn('#work-item-' + i + ' .work-item__image-hidder', '#work-item-' + i)
      ElementIn('#work-item-' + i + ' .work-item__name', '#work-item-' + i)
      LineIn('#work-item-' + i + ' + .work__line', '#work-item-' + i, 3.2);
      ElementIn('#work-item-' + i + ' .work-item__date', '#work-item-' + i)
      ElementIn('#work-item-' + i + ' .work-item__tag', '#work-item-' + i)
   }

   //About
   TitleIn('.about__title', '.about', '.about__line');
   ParagrapheIn('.about__paragraphe', '.about__content');

   //Exhibition
   ElementIn('.exhibition__title', '.exhibition')
   ElementIn('.exhibition__element', '.exhibition')
   LineIn('.exhibition__line', '.exhibition', 3);
  

   //Contact
   TitleIn('.contact__title', '.contact', '.contact__line');
   ParagrapheIn('.contact__paragraphe', '.contact');
   ElementIn('.contact__mail__content', '.contact')
   ElementOut('.header__mail',  '.contact__mail')

   //Footer
   ElementIn('.footer__content', '.contact__line')
}

export default HomePageAnimations;