import {gsap, Power4 }from 'gsap';
import getRandomInt from '../utils/random-int.js';
import toggleScroll from '../utils/prevent-scroll.js';
import { SplitText } from 'gsap/SplitText'


class Header{
   constructor(){
      this.openTypeList = [1, 2, 4, 5, 7, 10, 11];
      this.colorScheme = ['#ff0000', '#f6ff00', '#2100FF'];

      this.timeline = gsap.timeline();   
      this.splitText = new SplitText('.header__title', {type:"words,chars"});
      this.chars = this.splitText.chars; 
      
      toggleScroll(false);

      this.In();
      this.Out();
   }

   In(){
      const timeline = new gsap.timeline({ delay: 1, onComplete: () => { 
         this.AnimationPlay(); 
      }});

      timeline.from('.header-heading', {y: '100%', stagger: 0.1}) //Header
      timeline.from('.header__name', {y: '100%', stagger: 0.1, delay: -0.5}) //Name
      timeline.from('.navigation__item', {y: '100%', stagger: 0.1, delay: -0.5}) //Navigation
      timeline.from('.header__mail', {y: '100%'}); //Email
   }

   Out(){
      gsap.to('.header-heading',{
         stagger: -0.8,
         scrollTrigger: {
            markers: true,
           trigger: '.header__background--dark',
           start: "top-=1 top",
           end: "center-=100 top",
           scrub: .1,
           
         }, y: 100
       })
   }

   AnimationPlay(){
      const letterSelection = getRandomInt(0, this.chars.length -1);
      const openTypeSelection = this.openTypeList[getRandomInt(0, this.openTypeList.length)];
      
      this.timeline.to(this.chars[letterSelection], {
         y: (window.innerWidth >= 768) ? '-100%' : '-100%',
         onComplete:() => this.timeline.set(this.chars[letterSelection],{      
            y: (window.innerWidth >= 768) ? '100%' : '100%',
            color: this.colorScheme[getRandomInt(0, this.colorScheme.length)],
         }).to(this.chars[letterSelection], {
            y: '0%',
            onStart:() => { this.chars[letterSelection].classList.add('openTypeStyle' + openTypeSelection)},
            onComplete:() => ( 
               this.AnimationPlay()
            )
         })
      })

     
   }


}

export default Header;