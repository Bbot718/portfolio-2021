import gsap from 'gsap';
import SplitText from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger';
import RandomInt from '../../utils/random-int.js';

import LineIn from './line-in.js';

gsap.registerPlugin(ScrollTrigger); 

const Title = (element, trigger, line) => {

  const splitText = new SplitText(element, {type:"words,chars"})
  const chars = splitText.chars; 
  let wasAnimated = [chars.length]; 
  const openTypes = [1, 2, 4, 5, 7, 10, 11];

  let charIndex = RandomInt(0, chars.length);
  let delay = Math.round(1 / chars.length * 10) / 10;
  let stagger = 0.1;
  const duration = 5;


  for(let i = 0; i < chars.length; i++){
    
    wasAnimated[i] = false; 
  }

 

  for(let i = -1; i < chars.length ; i++){

    while(wasAnimated[charIndex] === true){
      charIndex = RandomInt(0, chars.length);
    }

    wasAnimated[charIndex] = true;

    gsap.from(chars[charIndex],{
      duration: .5,
      stagger: 0.3,
      delay: delay,
        scrollTrigger: {
          trigger: trigger,
          start: "top center",
          toggleActions: "play none none none",
        },
        y: '100%'
      })

    delay += stagger;
  }

  if(line){
    LineIn(line, trigger, duration + delay);
  }
}

export default Title;