import {gsap, Power4 }from 'gsap';
import getRandomInt from '../../utils/random-int.js';
import { SplitText } from 'gsap/SplitText'


class HeaderAnimation{
   constructor(element){
      this.openTypeList = [1, 2, 4, 5, 7, 10, 11];
      this.colorScheme = ['#ff0000', '#f6ff00', '#2100FF'];

      this.element = element;
      this.timeline = gsap.timeline();   
      this.splitText = new SplitText(element, {type:"words,chars"});
      this.chars = this.splitText.chars;       
   }

   Play(){
      const letterSelection = getRandomInt(0, this.chars.length -1);
      const openTypeSelection = this.openTypeList[getRandomInt(0, this.openTypeList.length)];
      
      this.timeline.to(this.chars[letterSelection], {
         y: (window.innerWidth >= 768) ? '-100%' : '-100%',
         onComplete:() => this.timeline.set(this.chars[letterSelection],{      
            y: (window.innerWidth >= 768) ? '100%' : '100%',
            color: this.colorScheme[getRandomInt(0, this.colorScheme.length +1)],
         }).to(this.chars[letterSelection], {
            y: '0%',
            onStart:() => { this.chars[letterSelection].classList.add('openTypeStyle' + openTypeSelection)},
            onComplete:() => ( this.Play())
         })
      })
   }
}

export default HeaderAnimation;