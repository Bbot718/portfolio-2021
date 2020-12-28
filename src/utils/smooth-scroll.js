import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

import HomePageAnimations from '../animations/home-page-animations.js';


class SmoothScroll{
  constructor(){
    this.scroller = document.querySelector("[data-scrollbar]");
    this.bodyScrollBar = Scrollbar.init(this.scroller, { damping: 0.02, renderByPixels: true, syncCallbacks: true });
    this.bodyScrollBar.setMomentum(100,100);

    gsap.registerPlugin(ScrollTrigger);
    this.ScrollerProxy(this.bodyScrollBar);
    this.FixedElements(document.querySelector('#navigation'));

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
    });
  }

  FixedElements(fixedElement){
    if(fixedElement){
      this.bodyScrollBar.addListener(({ offset }) => {  
        fixedElement.style.top = offset.y + 'px';
      });
    }
  }

  ScrollTo(target){
    this.bodyScrollBar.scrollIntoView(target);
    console.log(target);
  }
}

export default SmoothScroll;