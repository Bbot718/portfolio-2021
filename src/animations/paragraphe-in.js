import {gsap, Power4 }from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger); 

const ParagrapheIn = (element, trigger) => {
   const splitText = new SplitText(element, {type:"words"})
   const lines = splitText.words;

   for(let i = 0; i < lines.length; i++){
    var parent = lines[i].parentNode;
    var wrapper = document.createElement('div');
    wrapper.style.overflow = 'hidden';
    wrapper.style.display = 'inline-block';

    parent.replaceChild(wrapper, lines[i]);
    wrapper.appendChild(lines[i]);
   }
    

   gsap.from(lines, {
      stagger: 0.01,
        scrollTrigger: {
          trigger: trigger,
          start: "top center",
          toggleActions: "play none none none",
          ease: Power4.easeOut
        },
        y: '100%'
   })
}

export default ParagrapheIn;