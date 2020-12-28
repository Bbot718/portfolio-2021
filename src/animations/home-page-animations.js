
/*
import TitleIn from './title-in.js';
import ElementIn from './element-in.js'
import ParagrapheIn from './paragraphe-in.js'
import LineIn from './line-in.js';

import MenuActive from './menu-active.js';
*/

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 


const HomePageAnimations = () => {

   /*

   //Navigation   
   ElementIn('.navigation__title', '.project', true)
   LineIn('.navigation__line', '.project')
   ElementIn('.navigation__item', '.project', true)

   //Project Selection
   MenuActive('#navigation--work', '.project');
   MenuActive('#navigation--about', '#about');

   TitleIn('.project__title', '.project', true)
   LineIn('.project__line', '.project');
   
   
   for(let i = 0; i < document.querySelectorAll('.project-item').length; i++){
      ElementIn('#project-item-' + i + ' .project-item__name', '#project-item-' + i)
      LineIn('#project-item-'+ i + " + .project-item__line", '#project-item-' + i);
      ElementIn('#project-item-' + i + ' .project-item__date', '#project-item-' + i)
      ElementIn('#project-item-' + i + ' .project-item__tag', '#project-item-' + i)
   }

   //About
   TitleIn('.about__title', '.about', true);
   LineIn('.about__line', '.about');
   ParagrapheIn('.about__paragraphe', '.about');

   //Exhibitions
   ElementIn('.exhibition__title', '.exhibition', true)
   LineIn('.exhibition__line', '.exhibition');
   ElementIn('.exhibition__name', '.exhibition', true)
   ElementIn('.exhibition__date', '.exhibition', true)
   ElementIn('.exhibition__location', '.exhibition', true)
   
   //Contact
   TitleIn('.contact__title', '.contact', true);
   LineIn('.contact__line', '.contact');
   ParagrapheIn('.contact__paragraphe', '.contact');
   ElementIn('.contact__link', '.contact', true)

   */
}

export default HomePageAnimations;