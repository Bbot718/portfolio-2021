import gsap from 'gsap';
import Scrollbar from 'smooth-scrollbar';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); 

const ScrollerProxy = (bodyScrollBar) => {
   ScrollTrigger.scrollerProxy(document.querySelector(".scrollable"), {
      scrollTop(value) {
        arguments.length && (bodyScrollBar.scrollTop = value);
        return bodyScrollBar.scrollTop;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      }
    });
    bodyScrollBar.addListener(ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: '.scrollable' });
   
}

export default ScrollerProxy;