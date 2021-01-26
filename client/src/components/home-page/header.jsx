import React, { useEffect } from 'react'

//Utils
import getRandomInt from '../../utils/random-int.js';
import OpenTypeSelection from '../../utils/opentype/letter-selection.js'

//GSAP
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Timeline } from 'gsap/gsap-core';
gsap.registerPlugin(ScrollTrigger); 

function HandlePlay(currentProject){
   const timeline = new gsap.timeline(); 

   const chars = document.querySelectorAll('.header__letter');

   let letterSelection = getRandomInt(0, (chars.length-1));

   let openTypeList = OpenTypeSelection(chars[letterSelection]);
   let openTypeSelection = openTypeList[getRandomInt(0, (openTypeList.length-1))];

      /*
      console.log("There are " + chars.length + " letters")
      console.log("It chose letter is -"+ chars[letterSelection].innerHTML + "-")
      console.log("there are " + openTypeList.length + " options")
      console.log(openTypeList);
      console.log("it chose " + openTypeSelection + " which has the index " + openTypeList.indexOf(openTypeSelection));
      console.log("which ranged from 0 to " + (openTypeList.length-1))
      console.log((hasPassed[letterSelection === true] ? "the letter has passed" : "the letter hasn't passed" ))

      console.log("----------------------")
      */

      timeline.to(chars[letterSelection], { 
         y: '-100%', 
         onComplete:() => gsap.set(chars[letterSelection],{ 
            y: '100%', 
            //color: colorScheme[getRandomInt(0, colorScheme.length)]
         })
      })

      timeline.to(chars[letterSelection], {
         y: '0%',
         onStart:() => { 
            if(chars[letterSelection].classList.length > 1){
               chars[letterSelection].classList.remove(chars[letterSelection].classList[1])
            }
            else{
               chars[letterSelection].classList.add( 'openTypeStyle' + openTypeSelection)
            }
           
         },
         onComplete:() => (HandlePlay(currentProject)),
      })
   
}

function HandleIn(currentProject){
   const tl = new gsap.timeline({ delay: 1, onComplete: () => { HandlePlay(currentProject) }})

   tl.from( '.header__title-1', {y: '100%'}) //Header
   tl.from( '.header__line', {width: 0}) //Header
   tl.from( '.header__title-2', {y: '100%'}) //Header
   tl.from( '.header__title-3', {y: '100%'}) //Header
   tl.from(['.header__name', '.header__mail'], {y: '100%',}) //Name
   tl.from('.navigation__item', {y: '100%',}) //Navigatiom
}

function HandleOut(){   
   const timeline = new Timeline()
   timeline.to('.header__line',{ width: 0});
   timeline.to('.header__title',{ y: '100%', stagger: 0.1 });

   ScrollTrigger.create({
      trigger: '.header',
      start: "top top",
      end: "+=40%",
      scrub: .1,
      animation: timeline
   })
}

function Header(props) {

   useEffect(() => {
      const splitTextParent = new SplitText('.header__title', {type:"words, chars",  wordsClass:"header__word"});
      const splitTextChild = new SplitText('.header__title', {type:"words, chars", charsClass:"header__letter"});

      HandleOut();
      HandleIn(props.currentProject);
   }, [])

   return (
       <React.Fragment>
         <div className='header'>      
            <div className="header__main container">
           
            <div className="row">
               <div className="col-1-of-1 col-1-of-1--no-margin">
                  <div className="header__title__container">
                  <span className="header__title header__title-1 header-heading">hello friend,</span>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-1-of-1 col-1-of-1--no-margin">
                  <div className="header__title__container"> 
                     <span className="header__title header__title-1 header-heading ">i'm <span className="header-heading--bold">ben</span> , a passionate</span> 
                  </div>
               </div>
            </div>
            
            <div className="row">
               <div className="col-1-of-3 col-1-of-1--no-margin" />
               <div className="col-2-of-3 col-2-of-3--no-margin">
               <hr className="header__line line--thick"/>
                  <div className="header__title__container"> 
                     <span className="header__title header__title-2 header-heading header-heading--bold">interaction</span> 
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-1-of-3 col-1-of-1--no-margin" />
               <div className="col-2-of-3 col-2-of-3--no-margin">
                  <div className="header__title__container"> 
                     <span className="header__title header__title-2 header-heading  header-heading--bold">designer</span> 
                  </div>
                  <hr className="header__line line--thick"/>
               </div>
            </div>
            
            <div className="row">
               <div className="col-1-of-1 col-1-of-1--no-margin">
                  <div className="header__title__container"> 
                     <span className="header__title header__title-3 header-heading">based in <span className="header-heading--bold">lausanne</span></span> 
                  </div>
               </div>
            </div>
            
            <div className="row">
               <div className="col-1-of-1 col-1-of-1--no-margin">
                  <div className="header__title__container"> 
                     <span className="header__title header__title-3 header-heading">switzerland</span> 
                  </div>
               </div>
            </div>
         </div>
      </div>
      </React.Fragment>
   ) 
}

export default Header;
