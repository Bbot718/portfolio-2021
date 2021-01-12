import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

import NavigationSelected from '../animations/navigation/navigation-selected';

import HomePageAnimations from '../animations/home-page-animations.js';


class SmoothScroll{
  constructor(){
    this.scroller = document.querySelector(".scrollable");
    this.bodyScrollBar = Scrollbar.init(this.scroller, { 
      damping: 0.1, 
      renderByPixels: true, 
      syncCallbacks: true, 
      delegateTo: document, 
      alwaysShowTracks: true });
    this.bodyScrollBar.track.yAxis.element.remove();

    gsap.registerPlugin(ScrollTrigger);
    this.ScrollerProxy(this.bodyScrollBar);

    this.FixedElements(document.querySelector('.header__background--light'));
    this.FixedElements(document.querySelector('.navigation'));
    this.StickyElements(document.querySelector('.header__main', document.querySelector('.header__background')));
    
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

     //Current Navigation
     NavigationSelected('#navigation-selected--work','#work')
     NavigationSelected('#navigation-selected--about','#about-full')
     NavigationSelected('#navigation-selected--contact', '#contact')


    //Animate Home Page Element
    HomePageAnimations();
  }

  ScrollerProxy(bodyScrollBar){
    ScrollTrigger.scrollerProxy(".scrollable", {
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
    bodyScrollBar.addListener(ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: '.scrollable' });
  }

  

  FixedElements(fixedElement){
      this.bodyScrollBar.addListener(({ offset }) => {  
        fixedElement.style.top = offset.y + 'px';
      });
  }

  StickyElements(stickyELement){
    let isSticky = true;

    gsap.to(document.querySelector('.header__background'),{
      scrollTrigger: {
        trigger: document.querySelector('.header__background'),
        start: "top top",
        end: "bottom bottom",
        onEnterBack: () => {
          this.bodyScrollBar.addListener(({ offset }) => {  
            stickyELement.style.top = offset.y + window.innerHeight/2 + 'px';
          });
        }, 
        onLeave: () => {
          this.bodyScrollBar.addListener(({ offset }) => {
            stickyELement.style.top = window.innerHeight * 1.5 + 'px';
          });
        },
      },
    })
  
    if(isSticky){
      this.bodyScrollBar.addListener(({ offset }) => {  
        stickyELement.style.top = offset.y + window.innerHeight/2 + 'px';
      });
    }
    else{
      this.bodyScrollBar.addListener(({ offset }) => {  
        stickyELement.style.top = window.innerHeight * 1.5 + 'px';
      });
    }
  }
}

export default SmoothScroll;