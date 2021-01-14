import {gsap, Power4 }from 'gsap';
import getRandomInt from '../utils/random-int.js';
import toggleScroll from '../utils/prevent-scroll.js';
import { SplitText } from 'gsap/SplitText'


class Header{
   constructor(){
      this.openTypeList = [1, 2, 4, 5, 7, 10, 11];
      this.colorScheme = ['#ff0000', '#f6ff00', '#2100FF'];

      this.timeline = gsap.timeline();   
      this.splitTextParent = new SplitText('.header__title', {type:"words, chars", backgroundColor: 'red', wordsClass:"header__word__container"});
      this.splitTextChild = new SplitText('.header__title', {type:"words, chars", charsClass:"header__letter"});
      this.charsContainer = this.splitTextParent.chars; 
      this.chars = this.splitTextChild.chars; 


      for(let i =0; i < this.charsContainer.length; i++){
         gsap.set(this.charsContainer[i], { overflow: 'hidden', verticalAlign: 'top'})
      }


      toggleScroll(false);

      this.In();
      this.Out();
   }

   In(){
      const timeline = new gsap.timeline({ delay: 1, onComplete: () => { 
         this.AnimationPlay(); 
      }});
      
      timeline.from( this.chars, {x: '-100%'}) //Header
      timeline.from('.header__name', {y: '100%', stagger: 0.1}) //Name
      timeline.from('.navigation__item', {y: '100%', stagger: 0.1, delay: -0.5}) //Navigation
      timeline.from('.header__mail', {y: '100%'}); //Email
   }

   Out(){
      
      let triggerOffset = document.querySelector('.header-heading').offsetHeight;
      const triggerMargin = window.innerHeight / 10

      gsap.to('.header-heading',{
         stagger: -0.1,
         scrollTrigger: {
           trigger: '.header__background--dark',
           start: "top top",
           end: "center-=" + window.innerHeight/3 + " top",
           scrub: .1,
           
         }, y: '100%'
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