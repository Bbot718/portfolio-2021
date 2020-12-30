import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

import HomePageAnimations from '../animations/home-page-animations.js';


class SmoothScroll{
  constructor(){
    this.scroller = document.querySelector("[data-scrollbar]");
    this.bodyScrollBar = Scrollbar.init(this.scroller, { damping: 0.1, renderByPixels: true, syncCallbacks: true });
    this.bodyScrollBar.track.yAxis.element.remove();

    gsap.registerPlugin(ScrollTrigger);
    this.ScrollerProxy(this.bodyScrollBar);

    this.FixedElements(document.querySelector('.navigation'));
    this.StickyElements(document.querySelector('.header__main', '.header'));

    this.bodyScrollBar.addListener(ScrollTrigger.update);

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
    ScrollTrigger.create({
        trigger: trigger,
        markers: true

        
    })

  }

  ScrollTo(target){
    this.bodyScrollBar.scrollIntoView(target);
    console.log(target);
  }
}

export default SmoothScroll;