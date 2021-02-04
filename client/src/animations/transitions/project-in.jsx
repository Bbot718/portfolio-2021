import {gsap, Power4 }from 'gsap';
import { Timeline } from 'gsap/gsap-core';
import { SplitText } from 'gsap/all';

const ProjectIn = () => {
   const paragrapheSTContainer = new SplitText('.project__paragraphe', {type: "lines", linesClass: 'project__paragraphe__container' })
   const paragrapheST = new SplitText('.project__paragraphe', {type: "lines" })
   const paragrapheLines = paragrapheST.words;

    //Project In
    const timeline = new Timeline();
    
    timeline.to('.project__video__hidder', {scaleY: 0,ease: Power4.easeOut, })
    timeline.from('.project__title', { y: '100%',ease: Power4.easeOut, })
    timeline.from('.project__selection__controls', { y: '110%',ease: Power4.easeOut, })
    timeline.from('.project__line', { width: 0,ease: Power4.easeOut, });
    timeline.from(paragrapheLines, { y: '100%', stagger: 1,ease: Power4.easeOut, });
}

export default ProjectIn;