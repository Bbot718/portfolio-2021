import React, { useEffect } from 'react'

import getRandomInt from '../../utils/random-int.js';


//GSAP
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 

function Header(props) {

   useEffect(() => {
      const splitTextParent = new SplitText('.header__title', {type:"words, chars", wordsClass:"header__word__container"});
      const splitTextChild = new SplitText('.header__title', {type:"words, chars", charsClass:"header__letter"});

      HandleIn(props.currentProject);
      HandleOut();
   }, [])

   return (
       <React.Fragment>
         <div className='header'>      
            <div className="header__main container">
            <div className="row">
               <div className="col-1-of-1">
                  <div className="header__title__container">
                  <span className="header__title header-heading">Hello Friend,</span>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-1-of-1">
                  <div className="header__title__container"> 
                     <span className="header__title header-heading">I'm Ben, a Passionate</span> 
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-1-of-3" />
               <div className="col-2-of-3">
                  <div className="header__title__container"> 
                     <span className="header__title header-heading">Interaction</span> 
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-1-of-3" />
               <div className="col-2-of-3">
                  <div className="header__title__container"> 
                     <span className="header__title header-heading">Designer</span> 
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-1-of-1">
                  <div className="header__title__container"> 
                     <span className="header__title header-heading">Based in Lausanne</span> 
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-1-of-1">
                  <div className="header__title__container"> 
                     <span className="header__title header-heading">Switzerland</span> 
                  </div>
               </div>
            </div>
         </div>
      </div>
      </React.Fragment>
   )
  
}

function HandlePlay(currentProject){
   const timeline = new gsap.timeline(); 

   const chars = document.querySelectorAll('.header__letter');

   const openTypeList = [1, 2, 4, 5, 7, 10, 11];
   const colorScheme = ['#ff0000', '#f6ff00', '#2100FF'];
   const letterSelection = getRandomInt(0, chars.length -1);
   const openTypeSelection = openTypeList[getRandomInt(0, openTypeList.length)];

   timeline.to(chars[letterSelection], { 
      y: '-100%', 
      onComplete:() => gsap.set(chars[letterSelection],{ 
         y: '100%', 
         color: colorScheme[getRandomInt(0, colorScheme.length)]
      })
   })

   timeline.to(chars[letterSelection], {
      y: '0%',
      onStart:() => { chars[letterSelection].classList.add('openTypeStyle' + openTypeSelection)},
      onComplete:() => (HandlePlay(currentProject))
   })
}

function HandleIn(){
   const tl = new gsap.timeline({delay: 1, onComplete: () => { HandlePlay() }})

   tl.from( '.header__letter', {y: '100%', stagger: 0.01}) //Header
   tl.from('.header__name', {y: '100%', stagger: 0.1,}) //Name
   tl.from('.navigation__item', {y: '100%', delay: -0.5}) //Navigation
   tl.from('.header__mail', {y: '100%'}); //Email
}

function HandleOut(){   
   gsap.to('.header-heading',{
      stagger: -0.1,
      scrollTrigger: {
         markers: true,
        trigger: '.header__background--dark',
        start: "top top",
        end: "center-=" + window.innerHeight/3 + " top",
        scrub: .1,
      }, y: '100%'
    })

    gsap.to('.header__background--dark',{
      stagger: -0.1,
      scrollTrigger: {
        trigger: '.header__background--dark',
        start: "top top",
        end: "bottom top",
        scrub: .1,
      }, scaleY: 0
    })
}


export default Header;
