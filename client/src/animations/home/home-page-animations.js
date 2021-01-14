
/*
import HeaderIn from './header/header-in.js'
import HeaderOut from './header/header-out.js'
*/

import Header from '../header.js';

import TitleIn from '../transtitions/title-in.js';
import ElementIn from '../transtitions/element-in.js';
import ElementOut from '../transtitions/element-out.js';
import ParagrapheIn from '../transtitions/paragraphe-in.js'
import ImageIn from '../transtitions/image-in.js';
import LineIn from '../transtitions/line-in.js';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 


const HomePageAnimations = () => {
   ScrollTrigger.refresh();

   //Header
   const header = new Header();


   //Work
   TitleIn('.work__title', '.work', '.work__title__line');

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
   ElementIn('.footer__content', '.contact')

}



export default HomePageAnimations;