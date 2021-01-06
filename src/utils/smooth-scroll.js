import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

import HomePageAnimations from '../animations/home-page-animations.js';


class SmoothScroll{
  constructor(){
    this.scroller = document.querySelector("[data-scrollbar]");
    this.bodyScrollBar = Scrollbar.init(this.scroller, { damping: 0.1, renderByPixels: true, syncCallbacks: true, delegateTo: document });
    this.bodyScrollBar.track.yAxis.element.remove();

    gsap.registerPlugin(ScrollTrigger);
    this.ScrollerProxy(this.bodyScrollBar);

    this.FixedElements(document.querySelector('.navigation'));
    //this.StickyElements(document.querySelector('.header__main', '.header'));

    //Scroll To Navigation
    this.bodyScrollBar.scrollIntoView(document.querySelector('.header'))
    document.querySelector('#navigation--work').addEventListener("click", () => { 
      this.bodyScrollBar.scrollIntoView(document.querySelector('#work')) 
    });
    document.querySelector('#navigation--about').addEventListener("click", () => {
      this.bodyScrollBar.scrollIntoView(document.querySelector('#about')) 
    });
    document.querySelector('#navigation--contact').addEventListener("click", () => { 
      this.bodyScrollBar.scrollIntoView(document.querySelector('#contact')) 
     });

    //Animate Home Page Element
    HomePageAnimations();
  }

  ScrollerProxy(bodyScrollBar){
    ScrollTrigger.scrollerProxy("body", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      }
    });
  }

  

  FixedElements(fixedElement){
      this.bodyScrollBar.addListener(({ offset }) => {  
        fixedElement.style.top = offset.y + 'px';
      });
  }

  StickyElements(stickyELement, trigger){
    this.bodyScrollBar.addListener(({ offset }) => {  
      stickyELement.style.top = offset.y + 'px';
    });

    ScrollTrigger.create({
        trigger: trigger,
        start: 'top top',
        end: 'bottom bottom',
        markers: true,
        onEnter: () => console.log('hey'),
        onLeave: () => console.log('leave')       
    })
  }
}

export default SmoothScroll;