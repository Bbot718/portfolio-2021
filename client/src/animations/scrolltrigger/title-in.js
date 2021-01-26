//GSAP
import gsap  from 'gsap';
import SplitText from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger';

//Utils
import getRandomInt from '../../utils/random-int.js';
import OpenTypeSelection from '../../utils/opentype/letter-selection.js'

import LineIn from './line-in.js';
import { Timeline } from 'gsap/gsap-core';

gsap.registerPlugin(ScrollTrigger); 

const Title = (element, trigger, line) => {

  const splitText = new SplitText(element, {type:"words, chars", wordClass:"title__chars"})
  const chars = splitText.chars
  const shuffledChars = shuffle(chars)



  const tl = new Timeline();

  for(let i = 0; i < shuffledChars.length; i++){
    
    let openTypeList = OpenTypeSelection(shuffledChars[i]);
    let openTypeSelection = openTypeList[getRandomInt(0, (openTypeList.length-1))];

    shuffledChars[i].classList.add( 'openTypeStyle' + openTypeSelection)

    tl.from(shuffledChars[i], { y: '100%', duration: .2});
  }

  console.log( tl.totalDuration())

  ScrollTrigger.create({
    trigger: trigger,
    start: "top center",
    toggleActions: "play none none none",
    animation: tl,
  })

  

  if(line){
    LineIn(line, trigger, tl.totalDuration() * 3);
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default Title;